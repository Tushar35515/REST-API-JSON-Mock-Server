const fs = require('fs');

// Middleware to save changes to store.json after every POST or DELETE request
function saveChangesToStore(storeFilePath, storeData) {
    fs.writeFile(storeFilePath, JSON.stringify(storeData, null, 2), (err) => {
        if (err) {
            console.error("Error saving to store.json:", err);
        }
    });
}

module.exports = saveChangesToStore;