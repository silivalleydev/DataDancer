import gettingStart from './markdown/gettingStart.md';
import controlArray from './markdown/arrayMethods/controlArray.md';
import search from './markdown/arrayMethods/search.md';
import sort from './markdown/arrayMethods/sort.md';
import addDate from './markdown/dateMethods/addDate.md';
import controlDate from './markdown/dateMethods/controlDate.md';
import randomNumber from './markdown/numberMethods/randomNumber.md';
import calculation from './markdown/numberMethods/calculation.md';
import nameGenarator from './markdown/stringMethods/nameGenarator.md';
import passwordGenerator from './markdown/stringMethods/passwordGenerator.md';
import colorGenerator from './markdown/visualMethods/colorGenerator.md';

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
                path: 'arrayMethods/sort',
                name: 'Sort',
                file: sort,
                child: []
            },
            {
                path: 'arrayMethods/search',
                name: 'Search',
                file: search,
                child: []
            },
            {
                path: 'arrayMethods/controlArray',
                name: 'Controll Array',
                file: controlArray,
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
                path: 'dateMethods/controlDate',
                name: 'Control Date',
                file: controlDate,
                child: []
            },
            {
                path: 'dateMethods/addDate',
                name: 'Add Date',
                file: addDate,
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
                path: 'numberMethods/randomNumber',
                name: 'Random Number',
                file: randomNumber,
                child: []
            },
            {
                path: 'numberMethods/calculation',
                name: 'Calculation',
                file: calculation,
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
                path: 'stringMethods/name-gen',
                name: 'Name Generator',
                file: nameGenarator,
                child: []
            },
            {
                path: 'stringMethods/pw-gen',
                name: 'Password Generator',
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
                name: 'Color Generator',
                file: colorGenerator,
                child: []
            }
        ]
    },
]
