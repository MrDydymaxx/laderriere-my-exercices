const assert = require('chai').assert;
const my_sum = require('../day-1/exercise-0').my_sum;
const my_display_alpha = require('../day-1/exercise-1').my_display_alpha;

describe('Day 1 - Exercise 1', function(){
    it('my_sum should return 7', function() {
        assert.equal(my_sum(3,4),7);
    });
    it('my_sum should return 0 (no params)', function() {
        assert.equal(my_sum(),0);
    });
    it('my_sum should return 0 (wrong type)', function() {
        assert.equal(my_sum(5,'yes'),0);
    });
    it('my_sum should be int type', function() {
        assert.typeOf(my_sum(5,8),'number');
    });
});

describe('Day 1 - Exercise 2', function(){
    it('my_display_alpha should return abcdefghijklmnopqrstuvwxyz', function(){
        assert.equal(my_display_alpha(),'abcdefghijklmnopqrstuvwxyz');
    });
    it('my_display_alpha should be string type', function(){
        assert.typeOf(my_display_alpha(),'string');
    });
});
