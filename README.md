# DataDancer


## What is DataDancer?


DataDancer provides you with methods to easily get various data.    
  
Representative function is Name Generator, Password Generator, getRanRangeNum Method on NumberMethods.  

You can also receive data of various data types through DataDancer to receive other types of data or refined data.  

You can also get the calculated value of standard deviation, variance, etc.,  

you can sort the array or remove the middle element of the array and get the array elements randomly,  

for Date type object you can add month, day to Date object and you can get the day of the week.



## Docs Site

![site](https://github.com/wisemk79/DataDancer/blob/main/docs/src/image/site.png)

If you want to know how to use, parametric, return type, etc.,  

Please refer to the documentation site.  

There is a music player on the document site so that you can learn without getting bored.  

Enjoy!

[DataDancer Docs](https://wisemk79.github.io/DataDancer/#/)


## npm

[DataDancer npm](https://www.npmjs.com/package/datadancer)


## Install

```
$ npm i datadancer
```


## How to use?

```js
import DataDancer from 'datadancer';

// Create a class with the methods you want to use
const am = new DataDancer.ArrayMethods();
const sm = new DataDancer.StringMethods();
const nm = new DataDancer.NumberMethods();
const vm = new DataDancer.VisualMethods();
const dm = new DataDancer.DateMethods();
```

## API

### ArrayMethods

|Method|Parameter / Type / isOptional|ReturnType|Detail|
|---|----|---|---|
|quickSort|1. arr / Array / false, <br/>2. key / string / true |Array|This is quick sort.<br/>You can also sorting object array by key.|
|binarySearch|1. arr / Array / false, <br/> 2. search / any / false<br/> key / string / true |Object<br/>{ idx: number(array index), val: Any }|It is a search function that allows you to quickly search in an array sorted in ascending order.<br/>You can also search object array by key.|
|linearSearch|1. arr / Array / false, <br/> 2. search / any / false<br/> key / string / true |Object<br/>{ idx: number(array index), val: Any }|It is a search function that allows you to quickly search in an array sorted in ascending order.<br/>You can also search object array by key.|
|getRanElement|1. arr / Array / false, <br/> 2. howMany / number / true|Any \| Any Array|If you want to get the elements of an array randomly, use getRanElement. <br/>It is also possible to get **multiple random elements of an array.**|
|rmMiddleArrIdx|1. arr / Array / false, <br/> 2. target / number | number[] / false | Array |If you want to remove the middle element of an array, use rmMiddleArrIdx.<br/>It is also possible to remove **multiple middle elements of an array.**|


### DateMethods

|Method|Parameter / Type / isOptional|ReturnType|Detail|
|---|----|---|---|
|addDays|1. date / Date / false, <br/>2. dates / number / false |Date|add Day to Date type Object.|
|addMonth|1. date / Date / false, <br/>2. months / number / false |Date|add months to Date type Object.|
|addYear|1. date / Date / false, <br/>2. years / number / false |Date|add years to Date type Object.|
|dateCompare|1. fastDate / Date / false, <br/>2. latestDate / Date / false |Boolean|If you have 2 Date Type Object, dateCompare function gives you which date is latest.|
|getDayOfWeek|1. date / Date / false, <br/>2. lang / "eng" or "kor" or "jp" or "chi" or "india" or "hindi" or "german" / true |String|If you want to get day of the week to String type, use getDayOfWeek. Can be obtained by language|
|getFormDate|1. date / Date / false, <br/>2. form / string / false |String|If you want to get Date Type Object to String with your own Custom Form use getFormDate Function.|


### NumberMethods

|Method|Parameter / Type / isOptional|ReturnType|Detail|
|---|----|---|---|
|sum|1. arr / Number Array / false|Number|If you want to get sum value of number array, use sum function|
|avarage|1. arr / Number Array / false|Number|If you want to get avarage value of number array, use avarage function|
|deviation|1. arr / Number Array / false|Object<br/>{ origin: array(entered Array), avarage: number(avarage value), deviation: number(deviation value) }|If you want to get deviation value of number array, use deviation function|
|variance|1. arr / Number Array / false|Number|If you want to get variance value of number array, use variance function|
|standardDeviation|1. arr / Number Array / false | Object<br/>{ variance: number(variance value), standardDeviation: number(standardDeviation value) } |If you want to get standardDeviation value of number array, use standardDeviation function|
|getMinMax|1. arr / Number Array / false|Object<br/>{ min: number(minimum value), max: number(maximum value) }|If you want to get minimum and maximum value of number array, use getMinMax function|
|getRanDigitNum|1. digit / Number / false<br/>2. isString / Boolean / true<br/>3. zeroFixBackDigit / Number / true|Number \| String|If you want to get number of fixed digit randomly, use getRanDigitNum function|
|getRanRangeNum|1. start / Number / false<br/>2. end / Number / false|Number|If you want to get number from a to b randomly, use getRanRangeNum function|


### StringMethods

|Method|Parameter / Type / isOptional|ReturnType|Detail|
|---|----|---|---|
|nameGenerator|1. lang / "kor" or "eng" or "jp" or "chi" / true<br/>2. gender / "male" or "female" / true|String|If you want get name Randomly, use sum nameGenerator function.<br/>Default language value is English, Default gender value is male<br/>You can also set the language and gender.<br/>**Supported Language: English, Korean, Japan, Chinese, India, Hindi, German**<br/>**Supported Gender: English, Japan, Chinese, India, Hindi, German**|
|passwordGenerator|1. digit / Number / false<br/>2. include / "all" or "string" or "number" or "symbol" / true|String|If you want get password Randomly, use sum passwordGenerator function.<br/>Password must be set at least 4 digits.<br/>Default return password value is only inludes String.<br/>If you want to inlude number or symbol or both in password,<br/>you can also set it<br/>**Can Include: Number, Symbol**|


### VisualMethods

|Method|Parameter / Type / isOptional|ReturnType|Detail|
|---|----|---|---|
|colorGenerator|1. type / "rgb" or "code" / true |String|If you want to get Color randomly, use colorGenerator|
|gradientGenerator|1. direction / "to right" or "to left" or "to top" or "to bottom"/ true |String|If you want to get gradient randomly, use gradientGenerator|
