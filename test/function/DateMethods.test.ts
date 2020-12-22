import DateMethods from '../../src/function/DateMethods';
import { assert } from 'chai';

describe('DateMethods Test', () => {
    const d = new DateMethods();
    it('methods Test', () => {
        const date1 = new Date(2020,11 - 1,11 + 1); // 2020-11-11
        const date2 = new Date(2021,8 - 1,14 + 1); // 2021-08-14
        assert.isTrue(d.dateCompare(date1, date2));
        
        let dashCount = 0;
        let slashCount = 0;

        const dash = d.getFormDate(date1, "-");
        const slash = d.getFormDate(date2, "/");
        for (let i = 0; i < dash.length; i++) {
            if (dash[i] === "-") dashCount += 1;
            if (slash[i] === "/") slashCount += 1;
        }
        assert.isTrue(dashCount > 0);
        assert.isTrue(slashCount > 0);

        const date3 = new Date(2021, 1 - 1, 31 + 1); // 2020-01-31
        const addedOneDate = d.addDays(date3, 1);
        assert.isTrue(d.dateCompare(date3, addedOneDate));

        const addMonth = d.addMonths(date3, 1);
        assert.equal(d.getFormDate(addMonth, "-"), "2021-02-28");
    });
});