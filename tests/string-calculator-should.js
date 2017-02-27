"use strict";

var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

suite('String calculator should', function () {
    let createCalculator = function () {
        return new Calculator();
    };

    test('this one should fail', function () {
        var calculator = createCalculator();

        var sum = calculator.add(null);

        assert.equal(sum, 1);

    });

    test('return default value if input is empty', function () {
        var calculator = createCalculator();

        var sum = calculator.add(null);

        assert.equal(sum, 0);
    });

    test('return single number if input is that single number', function () {
        var calculator = createCalculator();

        var sum = calculator.add('2');

        assert.equal(sum, 2);
    });

    test('return sum of two comma separated one-digit numbers', function () {
        var calculator = createCalculator();

        var sum = calculator.add('1,2');

        assert.equal(sum, 1 + 2);
    });

    test('return sum of any two comma separated numbers', function () {
        var calculator = createCalculator();

        var sum = calculator.add('11,22');

        assert.equal(sum, 11 + 22);
    });

    test('return sum of any amount of comma separated values', function () {
        var calculator = createCalculator();

        var sum = calculator.add('1,2,3,4,5');

        assert.equal(sum, 1 + 2 + 3 + 4 + 5);
    });

    test('return sum of two new-line separated numbers', function () {
        var calculator = createCalculator();

        var sum = calculator.add('1\n2');

        assert.equal(sum, 1 + 2);
    });
});