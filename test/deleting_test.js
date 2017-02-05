require('mocha');
const mongoose = require('mongoose');
const assert = require('assert');
const MarioChar = require('../models/marioChar');
const {
  callDone
} = require('./util');

describe('Deleting Records', () => {
  let char;

  // drop the char collection before each test
  const dropMarioCollection = done => mongoose.connection.collections['mariochars'].drop(done);
  beforeEach(dropMarioCollection);
  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(callDone(done));
  })

  it('Delete one record from the database', (done) => {
    MarioChar.findOneAndRemove({
      name: 'Mario'
    }).then(() => {
      MarioChar.findOne({
        name: 'Mario'
      }).then((result) => {
        assert(result === null);
      }).then(callDone(done));
    })
  })


})