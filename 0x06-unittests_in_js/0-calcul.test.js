const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('floating Whole number', () => {
        assert.strictEqual(calculateNumber(1.0, 3.0), 4);
    });

    it('floating number: a is whole number and b is > 0.5', () => {
        assert.strictEqual(calculateNumber(1.0, 3.7), 5);
    });

    it('floating number: a is < 0.5, b > 0.5', () =>{
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('floating number: a is 0.5, b > 0.5', () =>{
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});