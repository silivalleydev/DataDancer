# Random Number

If you want get Random Number, use NumberMethods

## Methods

### - getRanDigitNum()

#### Explanation

If you want to get number of fixed digit randomly, use getRanDigitNum function

#### Parameter

1. paramName: digit, type: Number, Optional: false
2. paramName: isString, type: Boolean, Optional: true, dafula Value: false
3. paramName: zeroFixBackDigit, type: Number, Optional: true

#### Return

return Number or String

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

// if you want to get 3 digit number,
const rs1 = d.getRanDigitNum(3);

console.log(rs1) // 131
console.log(rs1) // 233

// if you want to get 3 digit number to String,
const rs2 = d.getRanDigitNum(3, true);

console.log(rs2, typeof rs2) // 021 string
console.log(rs2, typeof rs2) // 121 string

// if you want to 2 digit fix zero 
const rs3 = d.getRanDigitNum(3, false, 2);

console.log(rs3) // 300
console.log(rs3) // 400
```

### - getRanRangeNum()

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