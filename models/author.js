const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const BookSchema = new Schema({
  title: String,
  pages: Number
})

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
})

const AuthorChar = mongoose.model('author', AuthorSchema);

module.exports = AuthorChar;