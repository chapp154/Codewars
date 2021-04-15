export function reverseOrRotate(str, sz) {

	// const splitArr = str.split("");
	// let chunks = [];
	// splitArr.forEach((chunk, index, arr) => {
	// 	if((index + 1) % sz === 0) {
	// 		splitArr.splice((index + 1), 0, "-");
	// 	}
	// })

	for (let i = 0; i < str.length; i++) {

		if(i % sz === 0) {
			str.i = ",";
		}
	}



	console.log(str);

	
}


//"123456 987654", 6