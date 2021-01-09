## getDayOfWeek()

#### Explanation

If you want to get day of the week to String type, use getDayOfWeek.
Can be obtained by language

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: lang, type: "eng" || "kor" || "jp", Optional: true, default Value: "eng"

#### Return

return String

#### usage

```
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date = new Date(2021, 0, 7); // 2020-01-06

// if you want to get day of week
const rs = d.getDayOfWeek(date);
const krs = d.getDayOfWeek(date, "kor");
const jrs = d.getDayOfWeek(date, "jp");

console.log(rs) // WednesDay
console.log(krs) // 수
console.log(jrs) // 水曜日
```
