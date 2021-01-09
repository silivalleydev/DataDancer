# Calculation

If you want get value of Sum, Array or etc..., use NumberMethods

## Methods

### - sum()

#### Explanation

If you want to get sum value of number array, use sum function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Number

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [1,3,5];
const rs = d.sum(numArr);

console.log(rs); // 9
```

### - avarage()

#### Explanation

If you want to get avarage value of number array, use avarage function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Number

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [1,3,5];
const rs = n.avarage(numArr);

console.log(rs); // 3
```


### - deviation()

#### Explanation

If you want to get deviation value of number array, use deviation function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Object 

- Properties
1. origin: array(entered Array)
2. avarage: number(avarage value)
3. deviation: number(deviation value)}

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [175, 177, 179, 181, 183];
const rs = d.deviation(numArr);

console.log(rs); /* 
{
  origin: [ 175, 177, 179, 181, 183 ],
  avarage: 179,
  deviation: [ -4, -2, 0, 2, 4 ]
}
*/
```

### - variance()

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


### - standardDeviation()

#### Explanation

If you want to get standardDeviation value of number array, use standardDeviation function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Object 

- Properties
1. variance: number(variance value)
2. standardDeviation: number(standardDeviation value)}

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [175, 177, 179, 181, 183];
const rs = d.standardDeviation(numArr);

console.log(rs) /* 
{ variance: 8, standardDeviation: 2.8284271247461903 }
*/
```

### - variance()

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


### - getMinMax()

#### Explanation

If you want to get minimum and maximum value of number array, use getMinMax function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Object 

- Properties
1. min: number(minimum value)
2. max: number(maximum value)}

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [ 3, 4, 2, 1, 6, 5 ];
const rs = d.getMinMax(numArr);

console.log(rs) /* 
{ min: -1, max: 6 }
*/
```