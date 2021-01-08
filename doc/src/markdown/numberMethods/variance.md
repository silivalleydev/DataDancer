## variance()

#### Explanation

If you want to get variance value of number array, use variance function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Number

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [175, 177, 179, 181, 183];
const rs = d.variance(numArr);

console.log(rs) // 8
```
