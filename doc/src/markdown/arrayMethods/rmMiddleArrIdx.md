## rmMiddleArrIdx()

#### Explanation

If you want to remove the middle element of an array, use rmMiddleArrIdx.

It is also possible to remove **multiple middle elements of an array**.

#### Parameter

1. paramName: arr, type: Array, Optional: false
1. paramName: target, type: Number | Number Array, Optional: false

#### Return

return Array

#### usage

```js
import DataDancer from 'dataDancer';

const a = new DataDancer.ArrayMethods();

const arr4 = [1,2,3,4,5,6,7];
// When you want to delete the index 1 element of the array
const rs1 = a.rmMiddleArrIdx(arr4, 1);

console.log(rs1); //[ 1, 3, 4, 5, 6, 7 ]

const arr5 = [1,2,3,4,5,6,7];

// When you want to delete the index 3, 5, 6  element of the array
const rs2 = a.rmMiddleArrIdx(arr5, [3, 5, 6]);

console.log(rs2); // [ 1, 2, 3, 5 ]
```
