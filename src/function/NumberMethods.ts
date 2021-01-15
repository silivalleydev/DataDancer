import { Base } from '../common/Base';
import { ArrayMethods } from '../../src/function/ArrayMethods';

type Deviation = {
	origin: number[];
	avarage: number;
	deviation: number[];
};

type StandardDeviation = {
	variance: number;
	standardDeviation: number;
};

type MinMax = {
	min: number;
	max: number;
};
export class NumberMethods extends Base {
	/**
	 * fields
	 */
	private a: ArrayMethods;

	/**
	 * properties
	 */

	/**
	 *  constructor
	 */
	constructor() {
		super();
		this.a = new ArrayMethods();
	}

	/**
	 * methods
	 */

	/**
	 * you can get number of fixed digit randomly
	 * 
	 * (digit: number, isString?: boolean, zeroFixBackDigit?: number)
	 */
	getRanDigitNum(digit: number, isString: boolean = false, zeroFixBackDigit?: number) {
		let rs: any;
		const changeBackDigitZero = (digit: number, zeroFixBackDigit: number) => {
			if (zeroFixBackDigit < digit) {
				const arr = rs.split('');
				const endPoint = arr.length - zeroFixBackDigit - 1;
				for (let i = arr.length - 1; endPoint < i; i--) {
					arr[i] = 0;
				}
				rs = arr.join('');
				return rs;
			} else return false;
		};
		while (true) {
			rs = '';
			this.$_forLoop(0, digit, () => {
				let num = Math.floor(Math.random() * 10);
				rs += String(num);
			});

			if (isString === true && zeroFixBackDigit) {
				if (changeBackDigitZero(digit, zeroFixBackDigit)) {
					return changeBackDigitZero(digit, zeroFixBackDigit);
				} else {
					alert('zeroFixBackDigit값을 digit보다 작게 설정하세요');
					return false;
				}
			} else if (isString === true && !zeroFixBackDigit) return rs;

			rs = parseInt(rs);
			rs = String(rs);
			if (rs.length === digit && zeroFixBackDigit) {
				if (changeBackDigitZero(digit, zeroFixBackDigit)) {
					return parseInt(changeBackDigitZero(digit, zeroFixBackDigit));
				} else {
					alert('zeroFixBackDigit값을 digit보다 작게 설정하세요');
					return false;
				}
			} else if (String(rs).length === digit && !zeroFixBackDigit) break;
		}

		if (!isString) return parseInt(rs);
	}

	/**
	 * you can get number from a to b randomly
	 *
	 * (start: number, end: number)
	 */
	getRanRangeNum(start: number, end: number): number {
		return this.$_ranRangeNum(start, end);
	}

	/**
	 * you can get sum value of number array
	 * 
	 * (arr: number[])
	 */
	sum(arr: number[]): number {
		let rs = 0;
		arr.forEach(n => {
			rs += n;
		});
		return rs;
	}

	/**
	 * you can get avarage value of number array
	 * 
	 * (arr: number[])
	 */
	avarage(arr: number[]): number {
		let rs = 0;
		rs += this.sum(arr);
		return rs / arr.length;
	}

	/**
	 * you can get deviation value of number array
	 * 
	 * (arr: number[])
	 */
	deviation(arr: number[]): Deviation {
		const avarage = this.avarage(arr);
		const deviation = [];

		arr.forEach(num => {
			deviation.push(num - avarage);
		});

		return {
			origin: arr,
			avarage,
			deviation,
		};
	}

	/**
	 * you can get variance value of number array
	 * 
	 * (arr: number[])
	 */
	variance(arr: number[]): number {
		const deviation = this.deviation(arr).deviation;
		let rs = 0;
		deviation.forEach(d => {
			rs += d * d;
		});
		rs = rs / deviation.length;
		return rs;
	}

	/**
	 * you can get standardDeviation value of number array
	 * 
	 * (arr: number[])
	 */
	standardDeviation(arr: number[]): StandardDeviation {
		const variance = this.variance(arr);

		return {
			variance,
			standardDeviation: Math.sqrt(variance),
		};
	}

	/**
	 *  you can get minimum and maximum value of number array
	 * 
	 *  (arr: number[])
	 */
	getMinMax(arr: number[]): MinMax {
		const sorted = this.a.quickSort(arr);
		return {
			min: sorted[0],
			max: sorted[sorted.length - 1],
		};
	}
}
