const assert = require('assert');
const MarioChar = require('../models/marioChar');
const mongoose = require('mongoose');
const {
  callDone
} = require('./util');

describe('saving records', () => {

  // drop the char collection before each test
  const dropMarioCollection = done => mongoose.connection.collections['mariochars'].drop(done);
  beforeEach(dropMarioCollection);  

  it('saves a record to the database', (done) => {
    let char = new MarioChar({
      name: 'Mario'
    });
    char.save()
      .then(() => {
        assert(char.isNew === false);
      }).then(callDone(done));
  })
})