import { assert } from 'console';
import StringMethods from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('StringMethods Test', () => {
    it('methods Test', () => {
        const s = new StringMethods();
        s.getRanPassword(8)
    });
  });