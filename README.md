This is a CommerceIQ Intern Assignment.

# REST JSON Mock Server

This project is a lightweight REST-based JSON mock server built using Node.js and Express.js. It allows for easy addition, update, deletion, and retrieval of data from a JSON file, simulating the behavior of a real server without the need for a backend database.

## Features

- Supports CRUD operations for multiple entity types (e.g., posts, authors) stored in a JSON file.
- Immutable IDs to ensure data integrity.
- Middleware for handling requests and responses, including JSON parsing, error handling, and request validation.
- Easy setup and configuration.

## Clone the repository:
git clone https://github.com/Tushar35515/REST-API-JSON-Mock-Server.git

## Usage

- Use HTTP methods (GET, POST, DELETE) to interact with the mock server endpoints.
- Access data using endpoints like `/posts` and `/authors`, with optional parameters for specific entities (e.g., `/posts/:id`).

## API Reference

- **GET /posts**: Get all posts.
- **GET /posts/:id**: Get post by ID.
- **POST /posts**: Create a new post.
- **DELETE /posts/:id**: Delete post by ID.
- **GET /authors**: Get all authors.
- **GET /authors/:id**: Get author by ID.
- **POST /authors**: Create a new author.
- **DELETE /authors/:id**: Delete author by ID.
- Additional endpoints and functionalities can be added as needed.
