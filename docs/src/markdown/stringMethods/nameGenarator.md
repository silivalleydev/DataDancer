## nameGenerator()

#### Explanation

If you want get name Randomly, use sum nameGenerator function.

Default language value is English, Default gender value is male

You can also set the language and gender.

**Supported Language: English, Korean, Japan**

**Supported Gender: English, Japan**

#### Parameter

1. paramName: lang,  type: "kor" | "eng" | "jp", Optional: true, Default Value: "eng"
2. paramName: gender, type: "male" | "female", Optional: true, Default Value: "male"

#### Return

return String

#### usage

```
import DataDancer from 'dataDancer';

const s = new DataDancer.StringMethods();

const def = s.nameGenerator();
console.log(def); // JOSE

const engf = s.nameGenerator("eng", "female");
console.log(engf); // JEWEL

const kor = s.nameGenerator("kor");
console.log(kor); // 정바련

const jpm = s.nameGenerator("jp", "male");
console.log(jpm); // 友勝 東川上(ともかつ ひはしかわかみ)

const jpf = s.nameGenerator("jp", "female");
console.log(jpf); // 未瑠 落海(みる おちうみ)

```