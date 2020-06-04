const LinkedList = require('../linked-list/linked-list.js');

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    //const index = this._findSlot(key);
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    //const index = this._findSlot(key);
    let object = {
      key,
      value,
      DELETED: false,
    };

    const index = this._findSlot(key);
    if (this._hashTable[index]) {
      if (!this._hashTable[index].value.next) {
        const linkedList = new LinkedList();
        linkedList.insertFirst(this._hashTable[index].value);
        linkedList.insertLast(object);
        this._hashTable[index].value = linkedList;
        this.length++;
      } else {
        let found = false;
        let currNode = this._hashTable[index].value.head;
        while (currNode !== null) {
          if (key === currNode.key) {
            currNode.key = key;
            currNode.value = value;
            break;
          }
        }
        if (currNode === null) {
          this.length++;
          this._hashTable[index].insertLast(object);
        }
      }
    } else {
      this._hashTable[index] = object;
      this.length++;
    }
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
    return index;
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number.
    return hash >>> 0;
  }

  static MAX_LOAD_RATIO = 0.5;
  static SIZE_RATIO = 3;
}

const print = (hm) => {};

module.exports = HashMap;
