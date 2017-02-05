require('mocha');
const mongoose = require('mongoose');
const assert = require('assert');
const { callDone } = require('./util');

const Author = require('../models/author');

describe('Nesting Records', () => {

  // drop the author collection before each test
  const dropAuthorCollection = done => mongoose.connection.collections['authors'].drop(done);
  beforeEach(dropAuthorCollection);

  it('Creates and Author with Sub-documents', (done) => {
    let pat = new Author({
      name: 'Ravi',
      age: 25,
      books: [
        { title: 'No One', pages: 251 },
        { title: 'Only One', pages: 415 }
      ]
    })

    pat.save().then(() => {
      Author.findOne({ name: 'Ravi' })
        .then(record => assert(record.books.length === pat.books.length))
        .then(callDone(done));
    });
  })

  it('Add 1 books to Author', done => {
    let pat = new Author({
      name: 'Ravi',
      age: 25,
      books: [
        { title: 'No One', pages: 251 },
        { title: 'Only One', pages: 415 }
      ]
    })

    let record;
    pat.save()
      .then(() => Author.findOne({ name: 'Ravi' }))
      .then(rec => {
        record = rec;
        record.books.push({
          title: 'Once Again',
          pages: 156
        });
        return record.save()
      })
      .then(() => Author.findOne({ name: 'Ravi' }))
      .then(rec => assert(rec.books.length === 3))
      .then(callDone(done))
  });
})