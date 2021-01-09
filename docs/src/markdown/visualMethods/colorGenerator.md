## colorGenerator()

#### Explanation

If you want to get Color randomly, use colorGenerator

#### Parameter

1. paramName: type, type: "rgb" | "code", Optional: true, Default Value: code

#### Return

return String

#### usage

```
import DataDancer from 'dataDancer';

const v = new DataDancer.VisualMethods();

const rs = v.colorGenerator();

console.log(rs) // #5edcf6

const rs2 = v.colorGenerator("rgb");

console.log(rs2) // rgb(77,88,178)
```