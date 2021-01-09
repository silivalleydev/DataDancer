## getFormDate()

#### Explanation

If you want to get Date Type Object to String with your own Custom Form use getFormDate Function.

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: form, type: string, Optional: false

#### Return

return String

#### usage

```
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date = new Date(2020, 0, 32); // 2020-01-31

const rs = d.getFormDate(date, '/');

console.log(rs) // 2020/01/31
```
