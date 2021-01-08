## gradientGenerator()

#### Explanation

If you want to get gradient randomly, use gradientGenerator

#### Parameter

1. paramName: direction, type: "to right" | "to left" | "to top" | "to bottom", Optional: true

#### Return

return String

#### usage

```js
import DataDancer from 'dataDancer';

const v = new DataDancer.VisualMethods();

const rs = v.gradientGenerator(); // linear-gradient(to right, #ee1173, #8ba60c )

console.log(rs) // #5edcf6

const rs2 = v.gradientGenerator("to left");

console.log(rs2) // linear-gradient(to left, #11fa81, #30f70 )
```