import NumberMethods from '../../src/function/NumberMethods';
import { assert } from 'chai';

describe('NumberMethods Test', () => {
    it('methods Test', () => {
        const n = new NumberMethods();
        it('getRanDigitNum',()=>{
            let num: number | string = 0;
            let count: number = 0;

            num = n.getRanDigitNum(3);
            assert.equal(typeof num, "number");
            assert.equal(num.toString().length, 3);
            
            num = 0;
            num = n.getRanDigitNum(3, false,2);
            assert.equal(typeof num, "number");
            assert.equal(num.toString().length, 3);
            for (let i = 0; i < num.toString().length; i++) {
                if (num[i] === "0") count += 1;
            }
            assert.equal(count, 2);
            count = 0;

            num = n.getRanDigitNum(3, true);
            assert.equal(typeof num, "string");
        })

        it('getRanRangeNum', ()=>{
            let num: number = 0;
            
            num = n.getRanRangeNum(1, 10);
            for (let i = 0; i < 1000; i++) {
                assert.isTrue(num >= 1 && num <= 10);
            }
        })

    });
});