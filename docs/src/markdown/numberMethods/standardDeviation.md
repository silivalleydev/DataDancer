### - standardDeviation()

#### Explanation

If you want to get standardDeviation value of number array, use standardDeviation function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Object 

- Properties
1. variance: number(variance value)
2. standardDeviation: number(standardDeviation value)

#### usage

```
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [175, 177, 179, 181, 183];
const rs = d.standardDeviation(numArr);

console.log(rs) /* 
{ variance: 8, standardDeviation: 2.8284271247461903 }
*/
```
