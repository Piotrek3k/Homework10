// class CustomHashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size);
//     }
//     hash(key){
//         const hash = 37
//         let result = 0
//         for(let i = 0; i < key.length; i++){
//             // a = charCode(i) % 37 
//             // b = (i+1) * (37 % key.length+1)
//             // result += a * b
//             result+= (key.charCodeAt(i)) % hash * ((i + 1) * (hash % key.length + 1))
//         }
//         return result % this.size
        
//     }
//     insert(key, value) {
//         let hashedKey = this.hash(key);
//         let i = 0;
//         while (this.table[hashedKey] && this.table[hashedKey].key !== key) {
//             hashedKey = (hashedKey + 1) % this.size; // Linear probing
//             i++;
//             if (i >= this.size) {
//                 throw new Error("Hash table is full");
//             }
//         }
//         this.table[hashedKey] = { key, value };
//     }

//     get(key) {
//         let hashedKey = this.hash(key);
//         let i = 0;
//         while (this.table[hashedKey]) {
//             if (this.table[hashedKey].key === key) {
//                 return this.table[hashedKey].value;
//             }
//             hashedKey = (hashedKey + 1) % this.size; // Linear probing
//             i++;
//             if (i >= this.size) {
//                 break;
//             }
//         }
//         return undefined;
//     }

//     delete(key) {
//         let hashedKey = this.hash(key);
//         let i = 0;
//         while (this.table[hashedKey]) {
//             if (this.table[hashedKey].key === key) {
//                 this.table[hashedKey] = null;
//                 return true;
//             }
//             hashedKey = (hashedKey + 1) % this.size; // Linear probing
//             i++;
//             if (i >= this.size) {
//                 break;
//             }
//         }
//         return undefined;
//     }

//     getAll(callback) {
//         this.table.forEach(element => {
//             if(element){
//                 callback(element)
//             }
           
//         })
//     }
//     resize(newSize) {
//         if(newSize < this.count()){
//             throw new Error("Shrinking table would result in a data loss")
//         }

//         this.size = newSize;
//         let newTable = new Array(newSize)
        
//         this.table.forEach(element => {
//             if(element){
//                 let hashedKey = this.hash(element.key)
//                 let i = 0;
                
//                 while (newTable[hashedKey] && newTable[hashedKey].key !== element.key) {
//                     hashedKey = (hashedKey + 1) % this.size; // Linear probing
//                     i++;
//                     if (i >= this.size) {
//                         throw new Error("Hash table is full");
//                     }                
//                 }
//                 newTable[hashedKey] = { key: element.key, value: element.value };
                
//                     }
//         })
//         this.table=newTable
//     }

//     count() {
//         let result = 0;
//         this.getAll(() => {
//             result++;
//         });
//         return result;
//     }
// }

/**
 * A custom hash table implementation using linear probing for collision resolution.
 */
class CustomHashTable {
    /**
     * Creates an instance of CustomHashTable.
     * @param {number} size - The initial size of the hash table.
     */
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    /**
     * Generates a hash value for a given key.
     * @param {string} key - The key to be hashed.
     * @returns {number} The hash value of the key.
     */
    hash(key) {
        const hash = 37; // Prime number used as a hash
        let result = 0;
            // a = charCode(i) % 37 
            // b = (i+1) * (37 % key.length+1)
            // result += a * b
        for (let i = 0; i < key.length; i++) {
            result += (key.charCodeAt(i) % hash) * ((i + 1) * (hash % key.length + 1));
        }
        return result % this.size; // Ensure the hash value fits within the table size
    }

    /**
     * Inserts a key-value pair into the hash table.
     * @param {string} key - The key to insert.
     * @param {*} value - The value associated with the key.
     * @throws {Error} If the hash table is full.
     */
    insert(key, value) {
        let hashedKey = this.hash(key);
        let i = 0;
        while (this.table[hashedKey] && this.table[hashedKey].key !== key) {
            hashedKey = (hashedKey + 1) % this.size; // Linear probing
            i++;
            if (i >= this.size) {
                throw new Error("Hash table is full");
            }
        }
        this.table[hashedKey] = { key, value }; // Insert the key-value pair
    }

    /**
     * Retrieves the value associated with the given key.
     * @param {string} key - The key to search for.
     * @returns {*} The value associated with the key, or undefined if the key is not found.
     */
    get(key) {
        let hashedKey = this.hash(key);
        let i = 0;
        while (this.table[hashedKey]) {
            if (this.table[hashedKey].key === key) {
                return this.table[hashedKey].value; // Return the value if the key matches
            }
            hashedKey = (hashedKey + 1) % this.size; // Linear probing
            i++;
            if (i >= this.size) {
                break;
            }
        }
        return undefined; // Return undefined if the key is not found
    }

    /**
     * Deletes the key-value pair associated with the given key.
     * @param {string} key - The key to delete.
     * @returns {boolean} True if the key was deleted, undefined otherwise.
     */
    delete(key) {
        let hashedKey = this.hash(key);
        let i = 0;
        while (this.table[hashedKey]) {
            if (this.table[hashedKey].key === key) {
                this.table[hashedKey] = null; // Set the slot to null to mark it as deleted
                return true; // Indicate successful deletion
            }
            hashedKey = (hashedKey + 1) % this.size; // Linear probing
            i++;
            if (i >= this.size) {
                break;
            }
        }
        return undefined; // Return undefined if the key is not found
    }

    /**
     * Iterates through all key-value pairs in the hash table and applies a callback function to each non-null element.
     * @param {function(Object): void} callback - The callback function to apply to each element.
     */
    getAll(callback) {
        this.table.forEach(element => {
            if (element) {
                callback(element); // Apply the callback function to each non-null element
            }
        });
    }

    /**
     * Resizes the hash table to the new size.
     * @param {number} newSize - The new size of the hash table.
     * @throws {Error} If the new size is smaller than the current number of elements.
     */
    resize(newSize) {
        if (newSize < this.count()) {
            throw new Error("Shrinking table would result in data loss");
        }

        this.size = newSize;
        let newTable = new Array(newSize);

        this.table.forEach(element => {
            if (element) {
                // Rehash each element and insert into the new table
                let hashedKey = this.hash(element.key);
                let i = 0;

                while (newTable[hashedKey] && newTable[hashedKey].key !== element.key) {
                    hashedKey = (hashedKey + 1) % this.size; // Linear probing
                    i++;
                    if (i >= this.size) {
                        throw new Error("Hash table is full");
                    }
                }
                newTable[hashedKey] = { key: element.key, value: element.value };
            }
        });
        this.table = newTable; // Replace the old table with the new table
    }

    /**
     * Counts the number of non-null elements in the hash table.
     * @returns {number} The total number of non-null elements.
     */
    count() {
        let result = 0;
        this.getAll(() => {
            result++; // Increment the count for each non-null element
        });
        return result; // Return the total count
    }
}

module.exports = CustomHashTable




