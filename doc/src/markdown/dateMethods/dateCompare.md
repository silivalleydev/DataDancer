## dateCompare()

#### Explanation

If you have 2 Date Type Object, dateCompare function gives you 
which date is latest.

#### Parameter

1. paramName: fastDate, type: Date, Optional: false
2. paramName: latestDate, type: Date, Optional: false

#### Return

return Boolean

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date1 = new Date(2020, 0, 30); // 2020-01-29
const date2 = new Date(2020, 0, 32); // 2020-01-31

// date2 is latest date, so you can have value of true
const rs = d.dateCompare(date1, date2);

console.log(rs) // true
```
