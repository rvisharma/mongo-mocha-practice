require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');
const { callDone } = require('./util');

describe('Updating Records', () => {
    let char;

    beforeEach((done) => {
        char = new MarioChar({ name: 'Mario' });
        char.save().then(callDone(done));
    })

    it('Update one record in the database', () => {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' })
            .then(() => {
                MarioChar.findOne({ _id: char._id }).then((result) => {
                    assert(result.name === 'Luigi');
                })
            })
    })
})