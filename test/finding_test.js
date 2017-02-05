require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {
    var char;
    const callDone = (done) => () => done();

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
        console.log(char._id.toString());
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