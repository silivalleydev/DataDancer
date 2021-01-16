import { Base } from '../common/Base';
import { engData, symbolData, numData } from '../data/passwordData';
import { Gender, Language, LanguageCode } from '../common/type';
import { nameMapper } from '../mapper/nameMapper';
export class StringMethods extends Base {
	/**
	 * fields
	 */

	/**
	 * properties
	 */

	/**
	 *  constructor
	 */
	constructor() {
		super();
	}

	/**
	 * methods
	 */

	/**
	 * nameGenerator
	 *
	 * support eng, japan, korea, chinese, India name
	 *
	 * if you generate eng, japanese, chinese, India, Hindi, German Name, you can choose gender
	 *
	 * (lang?: "kor" | "eng" | "jp" | "chi" | "india" | "hindi" | "german", gender?: "male" | "female")
	 */
	nameGenerator(lang: Language = LanguageCode.english, gender: Gender = 'male') {
		const nameMap = nameMapper[lang];
		if (lang === LanguageCode.korean) {
			const idx1 = this.$_ranRangeNum(0, nameMap.last.length - 1);
			const idx2 = this.$_ranRangeNum(0, nameMap[gender].length - 1);
			let idx3 = this.$_ranRangeNum(0, nameMap[gender].length - 1);
			while (true) {
				if (idx2 === idx3) idx3 = this.$_ranRangeNum(0, nameMap[gender].length - 1);
				else break;
			}
			return nameMap.last[idx1] + nameMap[gender][idx2] + nameMap[gender][idx3];
		} else if (lang === LanguageCode.japanese){
			const laIdx = this.$_ranRangeNum(0, nameMap.last.length - 1);
			const lastName = nameMap.last[laIdx].split(', ');
			const idx = this.$_ranRangeNum(0, nameMap[gender].length - 1);
			const name = nameMap[gender][idx].split(', ');
			return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
		} else if (nameMap.last) {
			const idxF = this.$_ranRangeNum(0, nameMap[gender].length - 1);
			const idxL = this.$_ranRangeNum(0, nameMap.last.length - 1);
			return `${nameMap[gender][idxF]} ${nameMap.last[idxL]}`;
		} else {
			const idx = this.$_ranRangeNum(0, nameMap[gender].length - 1);
			return nameMap[gender][idx];
		} 
	}

	/**
	 * you can get password Randomly, use sum nameGenerator function.
	 *
	 * Password must be set at least 4 digits.
	 *
	 * Default return password value is only inludes String.
	 *
	 * If you want to inlude number or symbol or both in password,
	 *
	 * you can also set it
	 *
	 * (digit: number, include?: "string" | "all" | "number" | "symbol")
	 */
	passwordGenerator(digit: number, include: 'string' | 'all' | 'number' | 'symbol' = 'string') {
		if (digit < 4) return false;

		let result: string = '';
		let howManyIncludeNum: number = this.$_ranRangeNum(1, Math.floor(digit / 3));
		let howManyIncludeSymbol: number = this.$_ranRangeNum(1, Math.floor(digit / 3));

		const typeArr = [];

		this.$_forLoop(0, digit, (i: number) => typeArr.push({ type: null }));

		while (true) {
			if (include === 'string') break;

			let index = this.$_ranRangeNum(0, digit - 1);

			if (
				(include === 'all' || include === 'symbol') &&
				typeArr[index].type === null &&
				howManyIncludeSymbol !== 0
			) {
				typeArr[index].type = 'symbol';
				howManyIncludeSymbol -= 1;
			}
			if (
				(include === 'all' || include === 'number') &&
				typeArr[index].type === null &&
				howManyIncludeNum !== 0
			) {
				typeArr[index].type = 'number';
				howManyIncludeNum -= 1;
			}

			if (include === 'all' && howManyIncludeSymbol === 0 && howManyIncludeNum === 0) break;
			if (include === 'symbol' && howManyIncludeSymbol === 0) break;
			if (include === 'number' && howManyIncludeNum === 0) break;
		}

		const createRanPw: () => void = () => {
			typeArr.forEach(item => {
				if (item.type === 'number') result += numData[this.$_ranRangeNum(0, numData.length - 1)];
				else if (item.type === 'symbol')
					result += symbolData[this.$_ranRangeNum(0, symbolData.length - 1)];
				else result += engData[this.$_ranRangeNum(0, engData.length - 1)];
			});
		};

		createRanPw();

		return result;
	}
}
