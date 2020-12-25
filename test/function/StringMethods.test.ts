import StringMethods from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('StringMethods Test', () => {
    it('methods Test', () => {
        const s = new StringMethods();
        const pw = s.passwordGenerator(8)
        assert.equal(pw && pw.length, 8);

        for (let i = 0; i < 10000; i++) {
            const rs = s.passwordGenerator(8);
            assert.equal(rs && rs.length, 8);
        }
        
        for (let i = 0; i < 10000; i++) {
            const rs = s.passwordGenerator(10, "number");
            assert.equal(rs && rs.length, 10);
        }
        
        for (let i = 0; i < 10000; i++) {
            const rs = s.passwordGenerator(10, "symbol");
            assert.equal(rs && rs.length, 10);
        }
        
        for (let i = 0; i < 10000; i++) {
            const rs = s.passwordGenerator(10, "all");
            assert.equal(rs && rs.length, 10);
        }
    });
});