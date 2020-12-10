import Base from '../../src/common/Base';
import { assert } from 'chai';

class Test extends Base {
    constructor() {
        super();
    }
}

describe("Base Test", ()=>{
    const b = new Test();

    it("methods Test", ()=>{
        const arr = [];
        const customFunc = (i:number) => {
            arr.push(i)
        }
        b.forLoop(0, 10, customFunc)
        assert.equal(arr[arr.length-1], 9);
        
        const arr2 = [];
        const customFunc2 = (i:number) => {
            arr2.push(i)
        }
        b.forLoop(0, 10, customFunc2, true);
        assert.equal(arr2[arr2.length-1], 0);        
    })
})