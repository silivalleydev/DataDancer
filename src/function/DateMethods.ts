import { engDayOfWeek, korDayOfWeek } from '../data/dateData';

export default class DateMethods {
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
	 * 날짜를 비교하는 메서드
	 *
	 * (fastDate: 제일 빠른날짜인 Date 객체, latestDate: 제일 늦은 날짜인 Date 객체)
	 *
	 * latestDate가 fastDate보다 더 늦은 날짜라면 true를 반환한다.
	 */
	dateCompare(fastDate: Date, latestDate: Date): boolean {
		const compare: boolean = latestDate.getTime() > fastDate.getTime();
		return compare;
	}

	/**
	 * Form을 가진 String 날짜를 반환하는 메서드
	 *
	 * (date: 날짜객체, form: 연, 월, 일 사이에 넣을 텍스트)
	 *
	 *
	 * 예를 들어 2020년 10월 11일인 Date객체를 넣고 form을 "-"로 넣어주면
	 *
	 * 2020-10-11 이 String으로 반환된다.
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
	 * 년을 더하는 메서드
	 */
	addYear(date: Date, years: number): Date {
		return new Date(date.setFullYear(date.getFullYear() + years));
	}

	/**
	 * 월을 더하는 메서드
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
	 * 일을 더하는 메서드
	 */
	addDays(date: Date, dates: number): Date {
		const add = 86400000 * dates;
		const rs = new Date(date.getTime() + add);
		return rs;
	}

	/**
	 * 해당 날짜의 요일을 구하는 메서드 locale로 언어별로 요일을 얻을 수 있다
	 *
	 * (date: Date, locale: eng, kor, jp)
	 */
	getDayOfWeek(date: Date, lang: string): string {
		const dayIdx = date.getDay();
		let rs: string;
		switch (lang) {
			case 'eng':
				rs = engDayOfWeek[dayIdx];
				break;
			case 'kor':
				rs = korDayOfWeek[dayIdx];
				break;
		}
		return rs;
	}
}
