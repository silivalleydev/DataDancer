import { engDayOfWeek, jpDayOfWeek, korDayOfWeek } from '../data/dateData';

export class DateMethods {
	/**
	 * fields
	 */

	/**
	 * properties
	 */

	/**
	 *  constructor
	 */
	constructor() {}

	/**
	 * methods
	 */
	/**
	 * If you have 2 Date Type Object, dateCompare function gives you which date is latest.
	 *
	 * (fastDate: Date, latestDate: Date)
	 */
	dateCompare(fastDate: Date, latestDate: Date): boolean {
		const compare: boolean = latestDate.getTime() > fastDate.getTime();
		return compare;
	}

	/**
	 * you can get Date Type Object to String with your own Custom Form 
	 *
	 * (date: Date, form: string)
	 */
	getFormDate(date: Date, form: string): string {
		if (date) {
			const pad = num => {
				num += '';
				return num.length < 2 ? `0${num}` : num;
			};
			let day = pad(date.getDate() - 1);
			let year = date.getFullYear();
			let month = pad(date.getMonth() + 1);
			if (day === '00') {
				const lastDate = new Date(date.getTime() - 46400000);
				year = lastDate.getFullYear();
				month = pad(lastDate.getMonth() + 1);
				day = pad(lastDate.getDate());
			}
			return `${year}${form}${month}${form}${day}`;
		}
	}

	/**
	 * add Year to Date type Object
	 * 
	 * (date: Date, years: number)
	 */
	addYear(date: Date, years: number): Date {
		return new Date(date.setFullYear(date.getFullYear() + years));
	}

	/**
	 * add Month to Date type Object
	 * 
	 * (date: Date, months: number)
	 */
	addMonths(date: Date, months: number) {
		const d = date.getDate();
		date.setMonth(date.getMonth() + +months);
		if (date.getDate() != d) {
			date.setDate(0);
		}
		return date;
	}

	/**
	 * add Day to Date type Object
	 * 
	 * (date: Date, dates: number)
	 */
	addDays(date: Date, dates: number): Date {
		const add = 86400000 * dates;
		const rs = new Date(date.getTime() + add);
		return rs;
	}

	/**
	 * you can get day of the week to String type, use getDayOfWeek
	 *
	 * (date: Date, lang?: "eng" | "kor" | "jp")
	 */
	getDayOfWeek(date: Date, lang: "eng" | "kor" | "jp" = "eng"): string {
		const dayIdx = date.getDay();
		let rs: string;
		switch (lang) {
			case 'eng':
				rs = engDayOfWeek[dayIdx];
				break;
			case 'kor':
				rs = korDayOfWeek[dayIdx];
				break;
			case 'jp':
				rs = jpDayOfWeek[dayIdx];
				break;
		}
		return rs;
	}
}
