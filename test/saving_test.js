const assert = require('assert');
const MarioChar = require('../models/marioChar');
const {
    callDone
} = require('./util');

describe('saving records', () => {
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