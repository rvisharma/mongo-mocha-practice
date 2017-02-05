require('mocha');
const mongoose = require('mongoose');
const assert = require('assert');
const MarioChar = require('../models/marioChar');
const { callDone } = require('./util');

describe('Updating Records', () => {
  let char;

  // drop the char collection before each test
  const dropMarioCollection = done => mongoose.connection.collections['mariochars'].drop(done);
  beforeEach(dropMarioCollection);
  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(callDone(done));
  })

  it('Update one record in the database', (done) => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' })
      .then(() => {
        MarioChar.findOne({ _id: char._id })
          .then(result => assert(result.name === 'Luigi'))
          .then(callDone(done))
      })
  })

  it('Increment the weight by 1', (done) => {
    MarioChar.update({ name: 'Mario' }, { $inc: { weight: 1 } })
      .then(() => {
        MarioChar.findOne({ name: 'Mario' })
          .then(result => assert(result.weight === 51))
          .then(callDone(done));
      })
  })
})