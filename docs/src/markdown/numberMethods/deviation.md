## deviation()

#### Explanation

If you want to get deviation value of number array, use deviation function

#### Parameter

1. paramName: arr, type: Number Array, Optional: false

#### Return

return Object 

- Properties
1. origin: array(entered Array)
2. avarage: number(avarage value)
3. deviation: number(deviation value)

#### usage

```
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
