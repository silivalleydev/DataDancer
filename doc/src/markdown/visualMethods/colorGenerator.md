# Color Generator

If you want to get color randomly, use VisualMethods

## Methods

### - colorGenerator()

#### Explanation

If you want to get Color randomly, use colorGenerator

#### Parameter

1. paramName: type, type: "rgb" | "code", Optional: true, Default Value: code

#### Return

return String

#### usage

```js
import DataDancer from 'dataDancer';

const v = new DataDancer.VisualMethods();

const rs = v.colorGenerator();

console.log(rs) // #5edcf6

const rs2 = v.colorGenerator("rgb");

console.log(rs2) // rgb(77,88,178)
```

### - gradientGenerator()

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