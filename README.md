# Homework 10 - Hash Table

## Description
Implementation of a hash table class with hash function. CustomHashTable class provides methods for inserting, getting and removing key-value pairs from the table, method for iterating through table and method for resizing the table dynamically.

## Custom Hash Function
Implementation of a custom hash function. 
 - hash value = 37
 - result1 = charCode(i) % 37; i = each char of the key
 - result2 = (i + 1) * (37 % (key.length + 1))
 - hashValue = (result1 * result2) % size; where size is provided as an argument 
Function takes O(n) time, where n is the length of the key.

## Custom Hash Table Class
Implementation of a hash table class

### Properties
 - size: length of the hash table
 - table: array of key-value pairs

### Methods

 - hash(key): method with custom hashing algorithm.

 - insert(key, value): method that hashes the key and inserts it in the table on hashedKey index. It requires O(m+n) time in the worst case scenario where whole table needs to be iterated; n is the length of the table and m is the length of the key.

 - get(key): method that returns the value paired with the key. It requires O(m+n) time in the worst case scenario where whole table needs to be iterated; n is the length of the table and m is the length of the key.

 - delete(key): method to delete provided key. It requires O(m+n) time in the worst case scenario where whole table needs to be iterated; n is the length of the table and m is the length of the key.

 - getAll(callback): method to iterate over hash table. It requires O(n) time where n is the length of the table and m is the length of the key.

 - resize(newSize): method to dynamically resize the table. It requires O(m * n) in the worst case scenario time where whole table needs to be iterated; n is the length of the table and m is the average length of the key.

 - count(): method to count non-null values in the table. It requires O(n) time where n is the length of the table and m is the length of the key.

## Demonstration
Demonstration of hash table class is located in the Demonstration.js file

## Tests
Tests are located in the Tests.js file

## Documentation
Documentation is located in the Documentation.js file
