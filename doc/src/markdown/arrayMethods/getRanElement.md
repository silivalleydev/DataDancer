## getRanElement()

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
