import gettingStart from './markdown/gettingStart.md';
import arrayMethods from './markdown/arrayMethods/arrayMethods.md';
import dateMethods from './markdown/dateMethods/dateMethods.md';
import numberMethods from './markdown/numberMethods/numberMethods.md';
import stringMethods from './markdown/stringMethods/stringMethods.md';
import visualMethods from './markdown/visualMethods/visualMethods.md';

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
                path: 'arrayMethods/detail',
                name: 'Detail',
                file: arrayMethods,
                child: []
            }
        ]
    },
    {
        path: 'dateMethods',
        name: 'DateMethods',
        file: undefined,
        child: [
            {
                path: 'dateMethods/detail',
                name: 'Detail',
                file: dateMethods,
                child: []
            }
        ]
    },
    {
        path: 'numberMethods',
        name: 'NumberMethods',
        file: undefined,
        child: [
            {
                path: 'numberMethods/detail',
                name: 'Detail',
                file: numberMethods,
                child: []
            }
        ]
    },
    {
        path: 'stringMethods',
        name: 'StringMethods',
        file: undefined,
        child: [
            {
                path: 'stringMethods/detail',
                name: 'Detail',
                file: stringMethods,
                child: []
            }
        ]
    },
    {
        path: 'visualMethods',
        name: 'VisualMethods',
        file: undefined,
        child: [
            {
                path: 'visualMethods/detail',
                name: 'Detail',
                file: visualMethods,
                child: []
            }
        ]
    },
]
