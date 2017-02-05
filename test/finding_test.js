require('mocha');
const mongoose = require('mongoose');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

const {
  callDone
} = require('./util');

describe('Finding records', () => {
  var char;

  // drop the char collection before each test
  const dropMarioCollection = done => mongoose.connection.collections['mariochars'].drop(done);
  beforeEach(dropMarioCollection);
  beforeEach((done) => {

    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(callDone(done));
  })

  it('Find one record from the database', (done) => {
    MarioChar.findOne({
        name: 'Mario'
      })
      .then((result) => {
        assert(result !== undefined);
        assert(result.name === 'Mario');
      })
      .then(callDone(done));
  })

  it('Find one record by ID from the database', (done) => {
    MarioChar.findOne({
        _id: char._id
      })
      .then((result) => {
        assert(result._id.toString() === char._id.toString());
        assert(result.name === 'Mario');
      })
      .then(callDone(done));
  })

})