const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('saving records', () => {
    it('saves a record to the database', (done) => {
        let char = new MarioChar({
            name: 'Mario'
        });
        char.save()
            .then(() => {
                assert(char.isNew === false);
                done();
            });
    })
})