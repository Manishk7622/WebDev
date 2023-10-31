// Closure

function getArray1() {
	let arr = [];
	let i;
	for (i = 0; i < 10; i++){
		arr[i] = function () {
             return i; 
            }
	}
	return arr;
}

let get_arr1 = getArray1();

console.log(get_arr1[0]()); //10
console.log(get_arr1[1]()); //10
console.log(get_arr1[2]()); //10
console.log(get_arr1[3]()); //10


function getArray2() {
	function myClosure(value) {
		return function () {
			return value;
		}
	}
	let arr = [];
	let i;
	for (i = 0; i < 10; i++) {
		arr[i] = myClosure(i);
	}
	return arr;
}
let get_arr2 = getArray2();
console.log(get_arr2[0]());//0
console.log(get_arr2[1]());//1
console.log(get_arr2[2]());//2
console.log(get_arr2[3]());//3
