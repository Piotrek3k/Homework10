const CustomHashTable = require("./CustomHashTable.js")

function runTests() {
    const hashTable = new CustomHashTable(11); // Small size to force collisions

    // Test insertion
    hashTable.insert('name', 'Alice');
    hashTable.insert('age', 25);
    hashTable.insert('city', 'Wonderland');
    console.assert(hashTable.get('name') === 'Alice', 'Error: name should be Alice');
    console.assert(hashTable.get('age') === 25, 'Error: age should be 25');
    console.assert(hashTable.get('city') === 'Wonderland', 'Error: city should be Wonderland');

    // Test update
    hashTable.insert('name', 'Bob');
    console.assert(hashTable.get('name') === 'Bob', 'Error: name should be Bob');

    // Test collision resolution
    hashTable.insert('anagram', 'value1');
    hashTable.insert('nagaram', 'value2'); // 'anagram' and 'nagaram' may collide

    console.assert(hashTable.get('anagram') === 'value1', 'Error: anagram should be value1');
    console.assert(hashTable.get('nagaram') === 'value2', 'Error: nagaram should be value2');

    // Test for inserting a key in a full table
    try {
        for (let i = 0; i < hashTable.size; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }
    } catch (e) {
        console.log('Caught expected error: ', e.message);
    }
    console.assert(hashTable.get('nonExistentKey') === undefined, 'Error: nonExistentKey should be undefined');

    // Test delete method
    console.assert(hashTable.delete('name') === true, 'Error: name should be deleted');
    console.assert(hashTable.get('name') === undefined, 'Error: name should be undefined after deletion');
    console.assert(hashTable.delete('nonExistentKey') === undefined, 'Error: nonExistentKey should be undefined');

    // Test count method
    console.assert(hashTable.count() === 10, 'Error: count should be 10'); // Since we've inserted 10 elements and deleted one

    // Test resize method
    hashTable.resize(20);
    console.assert(hashTable.size === 20, 'Error: size should be 20 after resizing');
    console.assert(hashTable.get('age') === 25, 'Error: age should still be 25 after resizing');
    console.assert(hashTable.get('city') === 'Wonderland', 'Error: city should still be Wonderland after resizing');

    // Test for resizing a table to a smaller size than the current count
    try {
        hashTable.resize(6)
    } catch (e) {
        console.log('Caught expected error: ', e.message);
    }

    console.log('All tests passed!');
}

runTests();