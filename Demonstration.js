const CustomHashTable = require("./CustomHashTable.js")

// initialize hash table
const hashTable = new CustomHashTable(5)

// checking the custom hash function
console.log(hashTable.hash("userName")) // 1
console.log(hashTable.hash("e-mail")) // 3
console.log(hashTable.hash("password")) // 4
console.log(hashTable.hash("age")) // 4
console.log(hashTable.hash("salary")) // 3

// inserting example values
hashTable.insert("userName", "user1")
hashTable.insert("e-mail", "user@email.com")
hashTable.insert("password", "qwerty123")
hashTable.insert("age", "23")
hashTable.insert("salary", "10000")

// getting values
console.log(hashTable.get("userName")) // user1
console.log(hashTable.get("password")) // qwerty123

// deleting value
hashTable.delete("password")

// trying to access deleted value
console.log(hashTable.get("password"))  // undefined

// counting values in table
console.log(hashTable.count())  // 4

// resizing table to 4
hashTable.resize(4)

// trying to insert values above size of the table
//hashTable.insert("address", "34 Flower Street") // error

// iterating through hash table
const iterate = (x) => {console.log(x)} 
hashTable.getAll(iterate)

