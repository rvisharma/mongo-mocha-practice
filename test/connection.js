const mongoose = require('mongoose');

// connect to db before running test
before((done) => {
    mongoose.connect('mongodb://localhost/ninja');
    
    mongoose.connection.once('open', () => {
        console.log('Mongo DB localhost connected');
        done();
    }).on('error', () => console.log('an error occured'));
})