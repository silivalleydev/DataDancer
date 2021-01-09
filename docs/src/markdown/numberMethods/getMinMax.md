## getMinMax()

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

```
import DataDancer from 'dataDancer';

const d = new DataDancer.NumberMethods();

const numArr = [ 3, 4, 2, 1, 6, 5 ];
const rs = d.getMinMax(numArr);

console.log(rs) /* 
{ min: -1, max: 6 }
*/
```