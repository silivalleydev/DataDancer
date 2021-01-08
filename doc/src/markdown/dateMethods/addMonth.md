## addMonth()

#### Explanation

add Month to Date type Object

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: months, type: Number, Optional: false

#### Return

return Date Object

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date = new Date(2020, 0, 32); // 2020-01-31

// if you want add 1 Month to Date Object
const rs = d.addMonth(date, 1);

console.log(rs) // 2020-02-28
```
