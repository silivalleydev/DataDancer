# Sort & Search

If you want to Sort and Search about original or object array , use ArrayMethods

## Methods

### - quickSort()

#### Explanation

This is quick sort. 

You can also sorting object array by key.

#### Parameter

1. paramName: arr, type: Array, Optional: false
1. paramName: key, type: string, Optional: true

#### Return

return Array

#### usage

```js
import DataDancer from 'dataDancer';

const a = new DataDancer.ArrayMethods();


let arr = [
  79, 16, 23, 31, 71,
  55, 53,  2, 44, 96
]

const qsorted = a.quickSort(arr2);

console.log(qsorted) /*
[
   2, 16, 23, 31, 44,
  53, 55, 71, 79, 96
]
*/

let objArr = [
  { id: 93, name: 'SEYMOUR' },
  { id: 84, name: 'BOOKER' },
  { id: 31, name: 'BORIS' },
  { id: 40, name: 'CLEVELAND' },
  { id: 79, name: 'MICKEY' },
  { id: 73, name: 'GARRY' },
  { id: 78, name: 'EARNEST' },
  { id: 38, name: 'NORBERT' },
  { id: 28, name: 'RONNY' },
  { id: 100, name: 'CARLOS' }
]

// If you want to sort by name among the keys of the object 
const rs = a.quickSort(arrObj, "name"); /*
[
  { id: 84, name: 'BOOKER' },
  { id: 31, name: 'BORIS' },
  { id: 100, name: 'CARLOS' },
  { id: 40, name: 'CLEVELAND' },
  { id: 78, name: 'EARNEST' },
  { id: 73, name: 'GARRY' },
  { id: 79, name: 'MICKEY' },
  { id: 38, name: 'NORBERT' },
  { id: 28, name: 'RONNY' },
  { id: 93, name: 'SEYMOUR' }
]
*/
```


### - linearSearch()

#### Explanation

If you want to search value of index in array or object array, use linearSearch

You can search object array by key.

#### Parameter

1. paramName: arr, type: Array, Optional: false
2. paramName: search, type: any, Optional: false
3. paramName: key, type: any, Optional: true

#### Return

return Array

- Properties
1. idx: number(array index)
2. val: Any

#### usage

```js
import DataDancer from 'dataDancer';

const a = new DataDancer.ArrayMethods();


let arr = [
  79, 16, 23, 31, 71,
  55, 53,  2, 44, 96
]

const s = a.linearSearch(arr2, 79);

console.log(s) /*
{ idx: 0, val: 79 }
*/

let objArr = [
  { id: 8, name: 'MOHAMMAD' },
  { id: 29, name: 'GENARO' },
  { id: 28, name: 'GREGORY' },
  { id: 21, name: 'KENNETH' },
  { id: 63, name: 'NOLAN' },
  { id: 25, name: 'ELIJAH' },
  { id: 24, name: 'EVERETT' },
  { id: 87, name: 'CHARLES' },
  { id: 40, name: 'GUSTAVO' },
  { id: 66, name: 'HUBERT' }
]

// If you want to search by name among the keys of the object 
const rs = a.linearSearch(arrObj, "HUBERT", "name"); /*
{ idx: 9, val: { id: 66, name: 'HUBERT' } }
*/
```

### - binarySearch()

#### Explanation

It is a search function that allows you to quickly search in an **array sorted in ascending order**.

You can also search object array by key.

#### Parameter

1. paramName: arr, type: Array, Optional: false
2. paramName: search, type: any, Optional: false
3. paramName: key, type: any, Optional: true

#### Return

return Array

- Properties
1. idx: number(array index)
2. val: Any

#### usage

```js
import DataDancer from 'dataDancer';

const a = new DataDancer.ArrayMethods();


let arr = [
  1, 2, 3, 4, 5, 6 ,7
]

const s = a.binarySearch(arr2, 7);

console.log(s) /*
{ idx: 6, val: 7 }
*/

// An array sorted by name in ascending order.
let objArr = [
  { id: 84, name: 'BOOKER' },
  { id: 31, name: 'BORIS' },
  { id: 100, name: 'CARLOS' },
  { id: 40, name: 'CLEVELAND' },
  { id: 78, name: 'EARNEST' },
  { id: 73, name: 'GARRY' },
  { id: 79, name: 'MICKEY' },
  { id: 38, name: 'NORBERT' },
  { id: 28, name: 'RONNY' },
  { id: 93, name: 'SEYMOUR' }
]

// If you want to search by name among the keys of the object 
const rs = a.linearSearch(arrObj, "GARRY", "name"); /*
{ idx: 5, val: { id: 73, name: 'HUBERT' } }
*/
```