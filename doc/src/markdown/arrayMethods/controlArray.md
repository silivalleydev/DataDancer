# Control Array

If you want to remove the middle element of an array, get the elements of an array randomly, etc..., 

use ArrayMethods

## Methods

### - rmMiddleArrIdx()

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


### - getRanElement()

#### Explanation

If you want to get the elements of an array randomly, use getRanElement.

It is also possible to get **multiple random elements of an array**.

#### Parameter

1. paramName: arr, type: Array, Optional: false
1. paramName: howMany, type: Number, Optional: true

#### Return

return Any | Any Array

#### usage

```js
import DataDancer from 'dataDancer';

const a = new DataDancer.ArrayMethods();

const arr = [
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
];

const rs1 = a.getRanElement(arr);

console.log(rs1); // { id: 63, name: 'NOLAN' }

// When you want to get 2 random elements
const rs2 = a.getRanElement(arr, 2);

console.log(rs2); // [ { id: 40, name: 'GUSTAVO' }, { id: 21, name: 'KENNETH' } ]
```

