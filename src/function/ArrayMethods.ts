import { Base } from '../common/Base';

export class ArrayMethods extends Base {
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
	 * quick sort
	 */
	quickSort(arr: any[], key?: string) {
		if (arr.length <= 1) {
			return arr;
		} else {
			let left = [];
			let right = [];
			let newArray = [];
			let pivot = arr.pop();
			let length = arr.length;

			if (key) {
				for (let i = 0; i < length; i++) {
					if (arr[i][key] <= pivot[key]) {
						left.push(arr[i]);
					} else {
						right.push(arr[i]);
					}
				}
				return newArray.concat(this.quickSort(left, key), pivot, this.quickSort(right, key));
			} else {
				for (let i = 0; i < length; i++) {
					if (arr[i] <= pivot) {
						left.push(arr[i]);
					} else {
						right.push(arr[i]);
					}
				}
				return newArray.concat(this.quickSort(left), pivot, this.quickSort(right));
			}
		}
	}


	/**
	 * 이진 탐색 알고리즘
	 *
	 * (arr: 배열, search: 찾을요소)
	 */
	binarySearch(arr: any[], search: any, key?: string) {
		return this.$_binarySearchAl(arr, search, key);
	}

	/**
	 *  Linear Search
	 */
	linearSearch(arr: any[], search: any, key?: string) {
		let idx: number;
		let val: any;

		if (key) {
			this.$_forLoop(0, arr.length, (i: number) => {
				if (arr[i][key] === search) {
					idx = i;
					val = arr[i];
				}
			})
	
			if (idx) return { idx, val };
		} else {
			this.$_forLoop(0, arr.length, (i: number) => {
				if (arr[i] === search) idx = i;
			})
	
			if (idx) return { idx, val: search };
		}

		return false;
	}

	/**
	 * 배열 인덱스로 중간 요소 제거 메서드
	 *
	 * target에 배열로 여러개의 인덱스를 넣어주면 해당 인덱스가 삭제된다.
	 */
	rmMiddleArrIdx(arr: any[], target: number | number[]) {
		const arr1 = arr;
		if (typeof target === 'number') {
			arr1.splice(target, 1);
		} else if (target.length > 1) {
			const data = [];
			target.forEach(a => {
				data.push(arr1[a]);
			});

			data.forEach(a => {
				const idx = arr1.indexOf(a);
				if (idx !== -1) arr1.splice(idx, 1);
			});
		}
		return arr1;
	}

	/**
	 * 배열 랜덤 요소 추출
	 *
	 * 배열을 넣으면 요소중 하나를 랜덤하게 반환한다.
	 *
	 * howMany에 숫자를 넣으면 숫자를 넣은 만큼 랜덤 요소를 배열로 반환한다.
	 *
	 * (arr: 배열, howMany?: number)
	 */
	getRanElement(arr: any[], howMany?: number) {
    		const length = arr.length - 1;
		if (howMany) {
			const idx = [];
			const rs = [];

			let num = howMany > arr.length ? arr.length : howMany;
			while (num) {
				const ranNum = this.$_ranRangeNum(0, length);
				if (idx.indexOf(ranNum) === -1) {
					idx.push(ranNum);
					num -= 1;
				}
			}
			idx.forEach(i => {
				rs.push(arr[i]);
			});

			return rs;
		} else return arr[this.$_ranRangeNum(0, length)];
	}

	/**
	 * internal member
	 */

	private $_binarySearchAl(arr: any[], search: any, key?: string) {
		let firstIdx = 0;
		let lastIdx = arr.length - 1;

		if (key) {
			while (firstIdx <= lastIdx) {
				let midIdx = Math.floor((firstIdx + lastIdx) / 2);
				let midVal = arr[midIdx][key];
	
				if (search === midVal) {
					return { idx: midIdx, val: midVal };
				} else if (search < midVal) {
					lastIdx = midIdx - 1;
				} else {
					firstIdx = midIdx + 1;
				}
			}
		} else {
			while (firstIdx <= lastIdx) {
				let midIdx = Math.floor((firstIdx + lastIdx) / 2);
				let midVal = arr[midIdx];
	
				if (search === midVal) {
					return { idx: midIdx, val: midVal };
				} else if (search < midVal) {
					lastIdx = midIdx - 1;
				} else {
					firstIdx = midIdx + 1;
				}
			}
		}

		return false;
	}
}
