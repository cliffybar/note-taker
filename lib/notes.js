const fs = require('fs');
const path = require('path');

function findById(id, notes) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
}

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/zookeepers.json'),
        JSON.stringify({ zookeepers }, null, 2)
    );
    return zookeeper;
}

function validateNote(zookeeper) {
    if (!zookeeper.name || typeof zookeeper.name !== 'string') {
        return false;
    }
    if (!zookeeper.age || typeof zookeeper.age !== 'number') {
        return false;
    }
    if (!zookeeper.favoriteAnimal || typeof zookeeper.favoriteAnimal !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNewNote,
    validateNote
};
