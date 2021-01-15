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
	 * This is quick sort.
	 * 
	 * You can also sorting object array by key.
	 * 
	 * (arr: any[], key?: string)
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
	 * It is a search function that allows you to quickly search in an array sorted in ascending order.
	 * 
	 * You can also search object array by key.
	 * 
	 * (arr: any[], search: any, key?: string)
	 */
	binarySearch(arr: any[], search: any, key?: string) {
		return this.$_binarySearchAl(arr, search, key);
	}

	/**
	 *  you can search value of index in array or object array, use linearSearch
	 * 
	 *  You can also search object array by key.
	 * 
	 * (arr: any[], search: any, key?: string)
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
	
		} else {
			this.$_forLoop(0, arr.length, (i: number) => {
				if (arr[i] === search) idx = i;
					val = search;
			})
		}

		if (val) return { idx, val };
		else return false;
	}

	/**
	 * remove the middle element of an array
	 * 
	 * It is also possible to remove multiple middle elements of an array.
	 * 
	 * (arr: any[], target: number | number[])
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
	 * you can get the elements of an array randomly, use getRanElement.
	 * 
	 * It is also possible to get multiple random elements of an array.
	 *
	 * (arr: any[], howMany?: number)
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
