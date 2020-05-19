'use  strict';

const binarySearch = require('../array-binary-search.js');

describe('binary search array',() =>{
    it('return the index of the element',() => {
        expect(binarySearch([4,8,15,16,23,42] ,15)).toStrictEqual(2);   
    });
    it('return the index of the element',() =>{
        expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    });
});