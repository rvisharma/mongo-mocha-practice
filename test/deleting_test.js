require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Deleting Records', () => {
    let char;

    const callDone = (done) => () => done();

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