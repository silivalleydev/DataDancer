# Control Date

If you want to get day of week or string type date with custom form or etc... 
use DateMethods


## Methods

### - dateCompare()

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

// if you want add 1 year to Date Object
const rs = d.dateCompare(date1, date2);

console.log(rs) // true
```


### - getFormDate()

#### Explanation

If you want to get Date Type Object to String with your own Custom Form use getFormDate Function.

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: form, type: string, Optional: false

#### Return

return String

#### usage

```js
import DataDancer from 'dataDancer';

const d = new DataDancer.DateMethods()

const date = new Date(2020, 0, 32); // 2020-01-31

// if you want add 1 Month to Date Object
const rs = d.getFormDate(date, '/');

console.log(rs) // 2020/01/31
```


### - getDayOfWeek()

#### Explanation

If you want to get day of the week to String type, use getDayOfWeek.
Can be obtained by language

#### Parameter

1. paramName: date, type: Date, Optional: false
2. paramName: lang, type: "eng" || "kor" || "jp", Optional: true, default Value: "eng"

#### Return

return String

#### usage

```js
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
