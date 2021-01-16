## nameGenerator()

#### Explanation

If you want get name Randomly, use sum nameGenerator function.

Default language value is English, Default gender value is male

You can also set the language and gender.

**Supported Language: English, Korean, Japan, Chinese, India, Hindi, German**

**Supported Gender: English, Japan, Chinese, India, Hindi, German**

#### Parameter

1. paramName: lang,  type: "kor" | "eng" | "jp" | "chi" | "india" | "hindi" | "german", Optional: true, Default Value: "eng"
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

const chm = s.nameGenerator("chi", "male");
console.lot(chm) // 黄子桢

const chf = s.nameGenerator("chi", "female");
console.lot(chf) // 艾章习

const inm = s.nameGenerator("india", "male");
console.lot(inm) // ramdin verma

const inf = s.nameGenerator("india", "female");
console.lot(inf) // shivani

const hinm = s.nameGenerator("hindi", "male");
console.lot(hinm) // विवेक शर्मा

const hinf = s.nameGenerator("hindi", "female");
console.lot(hinf) // आभा भट

const germ = s.nameGenerator("german", "male");
console.lot(germ) // JOHANN Schmitz

const gerf = s.nameGenerator("german", "female");
console.lot(gerf) // CARL Krause


```