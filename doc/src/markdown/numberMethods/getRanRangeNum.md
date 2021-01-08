## getRanRangeNum()

#### Explanation

If you want to get number from a to b randomly, use getRanRangeNum function

#### Parameter

1. paramName: start, type: Number, Optional: false
2. paramName: end, type: Number, Optional: false

#### Return

return Number

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods()

// if you want to get number from 1 to 10 randomly
const rs1 = d.getRanRangeNum(1, 10);

console.log(rs1) // 8
```