## addYear()

#### Explanation

add Year to Date type Object

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: years, type: Number, Optional: false

#### Return

return Date Object

#### usage

```
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date = new Date(2020, 0, 32); // 2020-01-31

// if you want add 1 year to Date Object
const rs = d.addYear(date, 1);

console.log(rs) // 2021-01-31
```