## getDayOfWeek()

#### Explanation

If you want to get day of the week to String type, use getDayOfWeek.

It support English, Korean, Japanese, Chinese, India, Hindi, German

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: lang, type: "eng" || "kor" || "jp" || "chi" || "india" || "hindi" || "german", Optional: true, default Value: "eng"

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
const crs = d.getDayOfWeek(date, "chi");
const indiars = d.getDayOfWeek(date, "india");
const hindirs = d.getDayOfWeek(date, "hindi");
const germanrs = d.getDayOfWeek(date, "german");

console.log(rs) // WednesDay
console.log(krs) // 수
console.log(jrs) // 水曜日
console.log(crs) // 星期三
console.log(indiars) // budhavāra
console.log(hindirs) // बुधवार
console.log(germanrs) // Mittwoch
```
