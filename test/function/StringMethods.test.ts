import StringMethods from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('StringMethods Test', () => {
    it('methods Test', () => {
        const s = new StringMethods();
        const pw = s.getRanPassword(8)
        assert.equal(pw && pw.length, 8);

        const func = () => {
            const rs = s.getRanPassword(8);
            assert.equal(rs && rs.length, 8);
        }
        s.forLoop(0,10000,func);
        
        const numFunc = () => {
            const rs = s.getRanPassword(10, "number");
            assert.equal(rs && rs.length, 10);
        }
        s.forLoop(0,10000,numFunc);
       
        const symbolFunc = () => {
            const rs = s.getRanPassword(10, "symbol");
            assert.equal(rs && rs.length, 10);
        }
        s.forLoop(0,10000,symbolFunc);

        const allFunc = () => {
            const rs = s.getRanPassword(10, "all");
            assert.equal(rs && rs.length, 10);
        }
        s.forLoop(0,10000,allFunc);
    });
  });