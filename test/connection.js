const mongoose = require('mongoose');
require('mocha');

// connect to db before running test
before((done) => {
  mongoose.connect('mongodb://localhost/ninja');

  mongoose.connection
    .once('open', () => done())
    .on('error', (err) => console.log(err));
})

after((done) => {
  mongoose.connection
    .close()
    .then(() => done());
})