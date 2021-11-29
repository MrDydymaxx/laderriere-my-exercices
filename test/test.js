const assert = require('chai').assert;
const my_sum = require('../day-1/exercise-0').my_sum;

describe('Day 1', function(){
    it('my_sum should return 7', function() {
        assert.equal(my_sum(3,4),7);
    });
    it('my_sum should return 0 (no params)', function() {
        assert.equal(my_sum(),0);
    });
    it('my_sum should return 0 (wrong type)', function() {
        assert.equal(my_sum(5,'yes'),0);
    });
});
