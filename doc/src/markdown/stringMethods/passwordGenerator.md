# NameGenerator

If you want get password Randomly, use StringMethods

## Methods

### - passwordGenerator()

#### Explanation

If you want get password Randomly, use sum nameGenerator function.

Password must be set at least 4 digits.

Default return password value is only inludes String.

If you want to inlude number or symbol or both in password,

you can also set it

**Can Include: Number, Symbol**

#### Parameter

1. paramName: digit,  type: Number, Optional: false
2. paramName: include, type:  "string" | "all" | "number" | "symbol", Optional: true, Default Value: "string"

#### Return

return String

#### usage

```js
import DataDancer from 'dataDancer';

const s = new DataDancer.StringMethods();

const def = s.passwordGenerator(8);
console.log(def); // OVVqGTjb

const includeNum = s.passwordGenerator(8, "number");
console.log(includeNum); // LPCiee0T

const includeSymbol = s.passwordGenerator(8, "symbol");
console.log(includeSymbol); //y#cznbH%

const includeAll = s.passwordGenerator(8, "all");
console.log(includeAll); // cFlO@e02
```