const mongoose = require('mongoose');
require('mocha');

// connect to db before running test
before((done) => {
  mongoose.connect('mongodb://localhost/ninja');

  mongoose.connection.once('open', () => {
    console.log('Mongo DB localhost connected');
    done();
  }).on('error', () => console.log('an error occured'));
})

// drop the char collection before each test
beforeEach((done) => {
  // Drop the collection
  mongoose.connection.collections['mariochars'].drop(done);
})


after((done) => {
  console.log('All test completed');
  mongoose.connection
    .close()
    .then(() => done());
})