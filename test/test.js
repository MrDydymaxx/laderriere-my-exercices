const assert = require('chai').assert;
const my_sum = require('../day-1/exercise-0').my_sum;
const my_display_alpha = require('../day-1/exercise-1').my_display_alpha;
const my_display_alpha_reverse = require('../day-1/exercise-2').my_display_alpha_reverse;
const my_alpha_number = require('../day-1/exercise-3').my_alpha_number;

describe('Day 1 - Exercise 0', function(){
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

describe('Day 1 - Exercise 1', function(){
    it('my_display_alpha should return abcdefghijklmnopqrstuvwxyz', function(){
        assert.equal(my_display_alpha(),'abcdefghijklmnopqrstuvwxyz');
    });
    it('my_display_alpha should be string type', function(){
        assert.typeOf(my_display_alpha(),'string');
    });
});

describe('Day 1 - Exercise 2', function(){
    it('my_display_alpha_reverse should return zyxwvutsrqponmlkjihgfedcba', function(){
        assert.equal(my_display_alpha_reverse(),'zyxwvutsrqponmlkjihgfedcba');
    });
    it('my_display_alpha should be string type', function(){
        assert.typeOf(my_display_alpha_reverse(),'string');
    });
});

describe('Day 1 - Exercise 3', function() {
    it('my_alpha_number should return "8"', function(){
        assert.equal(my_alpha_number(8),"8");
    });
    it('my_alpha_number should return a string type', function(){
        assert.typeOf(my_alpha_number(8),'string')
    })
});