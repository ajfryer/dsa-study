# Big O Drills

## 1. What is the Big O for this?

1. O(1)

2. O(n)

## 2. Even or odd

O(1)

```
function isEven(value) {
    if (value % 2 === 0) { // O(1)
        return true;
    }
    else
        return false;
    }
}
```

## 3. Are you here?

O(n<sup>2</sup>) if arr1.length == arr2.length  
O(m\*n) if arr1.length != arr2.length

```
function areYouHere(arr1, arr2) { // O(n^2) or## O(m*n)
    for (let i = 0; i < arr1.length; i++) { // O(n) or O(m)
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) { // O(n)
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

## 4. Doubler

O(n)

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) { // O(n)
        array[i] *= 2; // O(1)
    }
    return array;
}
```

## 5. Naive Search

O(n)

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === item) { // O(1)
            return i;
        }
    }
}
```

## 6. Creating Pairs

O(n<sup>2</sup>)

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        for(let j = i + 1; j < arr.length; j++) { // O(n)
            console.log(arr[i] + ", " +  arr[j] ); // O(1)
        }
    }
}
```

## 7. Compute the sequence

This function calculates the fibonacci sequence
O(n)

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) { // O(n)

        if (i === 1) {
            result.push(0); // O(1)
        }
        else if (i === 2) {
            result.push(1); // O(1)
        }
        else {
            result.push(result[i - 2] + result[i - 3]); // O(1)
        }
    }
    return result;
}
```

## 8. An efficient search

O(logn)

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) { // O(logn) problem is cut in half
        currentIndex = Math.floor((minIndex + maxIndex) / 2); // O(1)
        currentElement = array[currentIndex]; // O(1)

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

## 9. Random Element

O(1)

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // O(1)
}
```

## 10. What Am I?

isPrime(n) - determines if (n) is prime
O(n)

```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) { // O(1)
        return false;
    }
    for (let i = 2; i < n; ++i) { // O(n)
        if (n % i === 0) return false;
    }
    return true;
}
```

## 11. Tower of Hanoi

Moves to complete:

    3 disks: 7
    4 disks: 15
    5 disks: 31

Time complexity: O(2^n)

## 12. See js files

## 13. Recursive Big O

```
1. counting sheep: O(n) - function runs no more sheep!
2. power calculator: O(n) - function runs until exponent is gone
3. reverse string: O(n) - runs for as long as length of string
4. nth triangular number: O(n) - runs until the num hits 0
5. string splitter: O(n) - runs for as many times there are delimeters
6. fibonacci: O(n) - each time the function calls, it calls two of itself, which calls two
7. factorial: O(n) - runs until the number runs out
8. find any way out of maze:
9. find all ways out of maze:
10. Anagrams: O(n!) - as string length goes, number of anagrams explodes
11. Organization chart: O(n) - runs only for each object name
12. binary representation: O(logn) - every function calls with less numbers so it grows slower than double
```

## 14. Iterative Big O

```
1. counting sheep: O(n)
2. power calculator: O(n)
3. reverse string: O(n)
4. nth triangular number: O(n)
5. string splitter: O(n)
6. fibonacci: O(n)
7. factorial: O(n)
```
