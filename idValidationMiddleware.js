// Middleware to validate immutability of ID for POST requests
function validateIdImmutability(storeData) {
    return function(entityType) {
        return function(req, res, next) {
            if (req.method === 'POST') {
                const id = parseInt(req.body.id);
                const existingEntity = storeData[entityType].find(entity => entity.id === id);
                if (existingEntity) {
                    res.status(400).json({ error: 'ID is immutable' });
                } else {
                    next();
                }
            } else {
                next();
            }
        };
    };
}

module.exports = validateIdImmutability;

