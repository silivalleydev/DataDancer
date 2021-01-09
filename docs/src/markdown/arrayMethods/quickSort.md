## quickSort()

#### Explanation

This is quick sort. 

You can also sorting object array by key.

#### Parameter

1. paramName: arr, type: Array, Optional: false
1. paramName: key, type: string, Optional: true

#### Return

return Array

#### usage

```
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
