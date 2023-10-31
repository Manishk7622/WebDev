// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
	var x=0;
	if(arr != []){
		arr.forEach(i =>{
			if(i){
				x++;
			}
		})
		return x;
	}
	return x;
	
}