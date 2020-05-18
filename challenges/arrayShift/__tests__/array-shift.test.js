'use strict'; 

const insertShiftArray = require('../array-shift.js');

describe('Shift Array', () => {
  it('return new array, it add a number in the middle of the array.', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });
  it('return new array, it add a number in the middle of the array.', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});