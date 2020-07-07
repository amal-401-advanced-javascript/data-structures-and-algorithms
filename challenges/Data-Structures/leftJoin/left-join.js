'use strict';
const { Hashmap } = require('../Data-Structures/hashtable/hashtable.js');

function leftJoin(hashTable1, hashTable2){

  let results = [];

  hashTable1.map.forEach(bucket => {
    let content = [];
    content.push(bucket.values()[0][0]);

    content.push(bucket.values()[0][1]);
    content.push(hashTable2.get(bucket.values()[0][0]));

    results.push(content);

  });

  return results;
}

let hashTable1 = new Hashmap;
let hashTable2 = new Hashmap;

hashTable1.add('fond','enamored');
hashTable1.add('wrath','anger');
hashTable1.add('diligent', 'employed');
hashTable1.add('outfit', 'garb');
hashTable1.add('guide', 'usher');

hashTable2.add('fond','averse');
hashTable2.add('wrath','delight');
hashTable2.add('diligent', 'idle');
hashTable2.add('guide', 'follow');
hashTable2.add('flow', 'jam');


console.log(leftJoin(hashTable1,hashTable2));