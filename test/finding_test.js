require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {

    const callDone = (done) => () => done();    
    
    beforeEach((done) => {
        
        new MarioChar({
            name: 'Mario'
        })
            .save()
            .then(callDone(done));
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
})