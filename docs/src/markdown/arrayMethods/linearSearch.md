## linearSearch()

#### Explanation

If you want to search value of index in array or object array, use linearSearch

You can search object array by key.

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
