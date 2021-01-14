import {StringMethods} from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('StringMethods Test', () => {
    it('pw methods Test', () => {
        const s = new StringMethods();
        const pw = s.passwordGenerator(8)
        assert.equal(pw && pw.length, 8);

        for (let i = 0; i < 100; i++) {
            const rs = s.passwordGenerator(8);
            assert.equal(rs && rs.length, 8);
        }
        
        for (let i = 0; i < 100; i++) {
            const rs = s.passwordGenerator(10, "number");
            assert.equal(rs && rs.length, 10);
        }
        
        for (let i = 0; i < 100; i++) {
            const rs = s.passwordGenerator(10, "symbol");
            assert.equal(rs && rs.length, 10);
        }
        
        for (let i = 0; i < 100; i++) {
            const rs = s.passwordGenerator(10, "all");
            assert.equal(rs && rs.length, 10);
        }

        const def = s.passwordGenerator(8);
        console.log(def);
        const includeNum = s.passwordGenerator(8, "number");
        console.log(includeNum);
        const includeSymbol = s.passwordGenerator(8, "symbol");
        console.log(includeSymbol);
        const includeAll = s.passwordGenerator(8, "all");
        console.log(includeAll);
    });

    it('methods Test', () => {
        const s = new StringMethods();

        const def = s.nameGenerator();
        console.log(def);
        
        const engf = s.nameGenerator("eng", "female");
        console.log(engf);
        
        const kor = s.nameGenerator("kor");
        console.log(kor);
        
        const jpm = s.nameGenerator("jp", "male");
        console.log(jpm);
        
        const jpf = s.nameGenerator("jp", "female");
        console.log(jpf);

    });
});