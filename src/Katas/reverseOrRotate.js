export function reverseOrRotate(str, sz) {

	if (str === "" || sz === 0) return "";

	const numberOfChunks = str.length / sz;
	const splitStr = str.split("");
	let chunks = [];
	let result = "";

	for (let i = 1; i <= numberOfChunks; i++) {
		chunks.push(splitStr.slice(0, sz).map(int => int));
		splitStr.splice(0, sz);
	}

	chunks.forEach(currArr => {
		const sum = currArr.reduce((acc, currNo) => acc += parseInt(currNo), 0);

		if (sum % 2 === 0) {
			currArr.forEach((curr, index, arr) => result += arr[currArr.length - (index + 1)]);			
		} else {
			currArr.push(currArr[0]);
			currArr.splice(0, 1);
			for (let currNo of currArr) result += currNo;
		}
	});

	return result;
}




//"66443875", 4  --> "44668753"