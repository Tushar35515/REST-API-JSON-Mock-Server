const express = require('express');
const fs = require('fs');
const saveChangesToStore = require('./dataHandler');
const validateIdImmutability = require('./idValidationMiddleware');

const app = express();
app.use(express.json());

const storeFilePath = 'store.json';

// Load data from store.json
let storeData = {};
try {
    const data = fs.readFileSync(storeFilePath, 'utf8');
    storeData = JSON.parse(data);
} catch (err) {
    console.error("Error reading store.json:", err);
}

// GET all posts
app.get('/posts', (req, res) => {
    res.json(storeData.posts);
});

// GET post by ID
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = storeData.posts.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// POST new post
app.post('/posts', validateIdImmutability(storeData)('posts'), (req, res) => {
    const newPost = req.body;
    newPost.id = storeData.posts.length;
    storeData.posts.push(newPost);
    saveChangesToStore(storeFilePath, storeData);
    res.status(201).json(newPost);
});

// DELETE post by ID
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = storeData.posts.findIndex(post => post.id === id);
    if (index !== -1) {
        storeData.posts.splice(index, 1);
        saveChangesToStore(storeFilePath, storeData);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// GET all authors
app.get('/authors', (req, res) => {
    res.json(storeData.authors);
});

// GET author by ID
app.get('/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const author = storeData.authors.find(author => author.id === id);
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
});

// POST new author
app.post('/authors', validateIdImmutability(storeData)('authors'), (req, res) => {
    const newAuthor = req.body;
    newAuthor.id = storeData.authors.length;
    storeData.authors.push(newAuthor);
    saveChangesToStore(storeFilePath, storeData);
    res.status(201).json(newAuthor);
});

// DELETE author by ID
app.delete('/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = storeData.authors.findIndex(author => author.id === id);
    if (index !== -1) {
        storeData.authors.splice(index, 1);
        saveChangesToStore(storeFilePath, storeData);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
