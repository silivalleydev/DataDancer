## binarySearch()

#### Explanation

It is a search function that allows you to quickly search in an **array sorted in ascending order**.

You can also search object array by key.

#### Parameter

1. paramName: arr, type: Array, Optional: false
2. paramName: search, type: any, Optional: false
3. paramName: key, type: any, Optional: true

#### Return

return Object

- Properties
1. idx: number(array index)
2. val: Any

#### usage

```
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