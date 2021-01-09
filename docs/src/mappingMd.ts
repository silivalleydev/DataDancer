import gettingStart from './markdown/gettingStart.md';
import quickSort from './markdown/arrayMethods/quickSort.md';
import binarySearch from './markdown/arrayMethods/binarySearch.md';
import linearSearch from './markdown/arrayMethods/linearSearch.md';
import getRanElement from './markdown/arrayMethods/getRanElement.md';
import rmMiddleArrIdx from './markdown/arrayMethods/rmMiddleArrIdx.md';
import addDays from './markdown/dateMethods/addDays.md';
import addMonth from './markdown/dateMethods/addMonth.md';
import addYear from './markdown/dateMethods/addYear.md';
import dateCompare from './markdown/dateMethods/dateCompare.md';
import getDayOfWeek from './markdown/dateMethods/getDayOfWeek.md';
import getFormDate from './markdown/dateMethods/getFormDate.md';
import sum from './markdown/numberMethods/sum.md';
import avarage from './markdown/numberMethods/avarage.md';
import variance from './markdown/numberMethods/variance.md';
import deviation from './markdown/numberMethods/deviation.md';
import standardDeviation from './markdown/numberMethods/standardDeviation.md';
import getMinMax from './markdown/numberMethods/getMinMax.md';
import getRanDigitNum from './markdown/numberMethods/getRanDigitNum.md';
import getRanRangeNum from './markdown/numberMethods/getRanRangeNum.md';
import nameGenarator from './markdown/stringMethods/nameGenarator.md';
import passwordGenerator from './markdown/stringMethods/passwordGenerator.md';
import colorGenerator from './markdown/visualMethods/colorGenerator.md';
import gradientGenerator from './markdown/visualMethods/gradientGenerator.md';

export const mdFiles = [
    {
        path: 'getting-start',
        name: 'Getting Start',
        file: gettingStart,
        child: []
    },
    {
        path: 'arrayMethods',
        name: 'ArrayMethods',
        file: undefined,
        child: [
            {
                path: 'arrayMethods/quickSort',
                name: 'quickSort()',
                file: quickSort,
                child: []
            },
            {
                path: 'arrayMethods/binarySearch',
                name: 'binarySearch()',
                file: binarySearch,
                child: []
            },
            {
                path: 'arrayMethods/linearSearch',
                name: 'linearSearch()',
                file: linearSearch,
                child: []
            },
            {
                path: 'arrayMethods/getRanElement',
                name: 'getRanElement()',
                file: getRanElement,
                child: []
            },
            {
                path: 'arrayMethods/rmMiddleArrIdx',
                name: 'rmMiddleArrIdx()',
                file: rmMiddleArrIdx,
                child: []
            },
        ]
    },
    {
        path: 'dateMethods',
        name: 'DateMethods',
        file: undefined,
        child: [
            {
                path: 'dateMethods/addDays',
                name: 'addDays()',
                file: addDays,
                child: []
            },
            {
                path: 'dateMethods/addMonth',
                name: 'addMonth()',
                file: addMonth,
                child: []
            },
            {
                path: 'dateMethods/addYear',
                name: 'addYear()',
                file: addYear,
                child: []
            },
            {
                path: 'dateMethods/dateCompare',
                name: 'dateCompare()',
                file: dateCompare,
                child: []
            },
            {
                path: 'dateMethods/getDayOfWeek',
                name: 'getDayOfWeek()',
                file: getDayOfWeek,
                child: []
            },
            {
                path: 'dateMethods/getFormDate',
                name: 'getFormDate()',
                file: getFormDate,
                child: []
            },
        ]
    },
    {
        path: 'numberMethods',
        name: 'NumberMethods',
        file: undefined,
        child: [
            {
                path: 'numberMethods/sum',
                name: 'sum()',
                file: sum,
                child: []
            },
            {
                path: 'numberMethods/avarage',
                name: 'avarage()',
                file: avarage,
                child: []
            },
            {
                path: 'numberMethods/deviation',
                name: 'deviation()',
                file: deviation,
                child: []
            },
            {
                path: 'numberMethods/variance',
                name: 'variance()',
                file: variance,
                child: []
            },
            {
                path: 'numberMethods/standardDeviation',
                name: 'standardDeviation()',
                file: standardDeviation,
                child: []
            },
            {
                path: 'numberMethods/getMinMax',
                name: 'getMinMax()',
                file: getMinMax,
                child: []
            },
            {
                path: 'numberMethods/getRanDigitNum',
                name: 'getRanDigitNum()',
                file: getRanDigitNum,
                child: []
            },
            {
                path: 'numberMethods/getRanRangeNum',
                name: 'getRanRangeNum()',
                file: getRanRangeNum,
                child: []
            },
        ]
    },
    {
        path: 'stringMethods',
        name: 'StringMethods',
        file: undefined,
        child: [
            {
                path: 'stringMethods/nameGenarator',
                name: 'nameGenarator()',
                file: nameGenarator,
                child: []
            },
            {
                path: 'stringMethods/passwordGenerator',
                name: 'passwordGenerator()',
                file: passwordGenerator,
                child: []
            },
        ]
    },
    {
        path: 'visualMethods',
        name: 'VisualMethods',
        file: undefined,
        child: [
            {
                path: 'visualMethods/colorGenerator',
                name: 'colorGenerator()',
                file: colorGenerator,
                child: []
            },
            {
                path: 'visualMethods/gradientGenerator',
                name: 'gradientGenerator()',
                file: gradientGenerator,
                child: []
            },
        ]
    },
]
