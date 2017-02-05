const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

// Create Schema and models
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
})

const MarioChar = mongoose.model('marioChar', MarioCharSchema);

module.exports = MarioChar;