import { Base } from '../common/Base';
import { engData, symbolData, numData } from '../data/passwordData';
import {
	kor_first_name,
	kor_last_name,
	eng_female_name,
	eng_male_name,
	jp_female_name,
	jp_male_name,
	jp_last_name,
	chi_male_name,
	chi_female_name,
	india_male_name,
	india_female_name,
	hindi_female_name,
	hindi_male_name,
	hindi_last_name,
	german_female_name,
	german_last_name,
	german_male_name
} from '../data/nameData';

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
	nameGenerator(lang: "kor" | "eng" | "jp" | "chi" | "india" | "hindi" | "german" = 'eng', gender: "male" | "female" = 'male') {
		if (lang === 'kor') {
			const idx1 = this.$_ranRangeNum(0, kor_last_name.length - 1);
			const idx2 = this.$_ranRangeNum(0, kor_first_name.length - 1);
			let idx3 = this.$_ranRangeNum(0, kor_first_name.length - 1);

			while (true) {
				if (idx2 === idx3) idx3 = this.$_ranRangeNum(0, kor_first_name.length - 1);
				else break;
			}
			return kor_last_name[idx1] + kor_first_name[idx2] + kor_first_name[idx3];
		} else if (lang === 'eng') {
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, eng_male_name.length - 1);
				return eng_male_name[idx];
			} else {
				const idx = this.$_ranRangeNum(0, eng_female_name.length - 1);
				return eng_female_name[idx];
			}
		} else if (lang === 'jp') {
			const laIdx = this.$_ranRangeNum(0, jp_last_name.length - 1);
			const lastName = jp_last_name[laIdx].split(', ');
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, jp_male_name.length - 1);
				const name = jp_male_name[idx].split(', ');
				return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
			} else {
				const idx = this.$_ranRangeNum(0, jp_female_name.length - 1);
				const name = jp_female_name[idx].split(', ');
				return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
			}
		} else if (lang === 'chi') {
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, chi_male_name.length - 1);
				return chi_male_name[idx];
			} else {
				const idx = this.$_ranRangeNum(0, chi_female_name.length - 1);
				return chi_female_name[idx];
			}
		} else if (lang === 'india') {
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, india_male_name.length - 1);
				return india_male_name[idx];
			} else {
				const idx = this.$_ranRangeNum(0, india_female_name.length - 1);
				return india_female_name[idx];
			}
		} else if (lang === 'hindi') {
			if (gender === 'male') {
				const idxF = this.$_ranRangeNum(0, hindi_male_name.length - 1);
				const idxL = this.$_ranRangeNum(0, hindi_last_name.length - 1);

				return `${hindi_male_name[idxF]} ${hindi_last_name[idxL]}`;
			} else {
				const idxF = this.$_ranRangeNum(0, hindi_female_name.length - 1);
				const idxL = this.$_ranRangeNum(0, hindi_last_name.length - 1);

				return `${hindi_female_name[idxF]} ${hindi_last_name[idxL]}`;
			}
		} else if (lang === 'german') {
			if (gender === 'male') {
				const idxF = this.$_ranRangeNum(0, german_male_name.length - 1);
				const idxL = this.$_ranRangeNum(0, german_last_name.length - 1);

				return `${german_male_name[idxF]} ${german_last_name[idxL]}`;
			} else {
				const idxF = this.$_ranRangeNum(0, german_female_name.length - 1);
				const idxL = this.$_ranRangeNum(0, german_last_name.length - 1);

				return `${german_female_name[idxF]} ${german_last_name[idxL]}`;
			}
		}
	}

	/**
	 * UUID 생성 메서드
	 */

	/**
	 * MAC 주소 생성 메서드
	 */

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
	passwordGenerator(digit: number, include: "string" | "all" | "number" | "symbol" = "string") {
		if (digit < 4) return false;

		let result: string = '';
		let howManyIncludeNum: number = this.$_ranRangeNum(1, Math.floor(digit / 3));
		let howManyIncludeSymbol: number = this.$_ranRangeNum(1, Math.floor(digit / 3));

		const typeArr = [];

		this.$_forLoop(0, digit, (i: number) => typeArr.push({ type: null }));

		while (true) {
			if (include === "string") break;

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
