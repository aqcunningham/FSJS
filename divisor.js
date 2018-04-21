/*Define a method called check_divisors that takes three parameters, divisor_array and Array and low, high will be integers.
function check_divisors(divisor_array, low, high)

-print all numbers from low-high
-if the any number being printed is divisible by any divisor number in divisor_array, print the number + the word ‘one_match’
-if the number being printed is divisible by ALL the numbers in the array, it should output the number + ‘all_match’*/


function check_divisors(divisor_array, low, high){
	while (divisor_array[0]<divisor_array[divisor_array.length-1]){
for(low; low<high; low++){
		if(divisor_array-low==0 || divisor_array-high==0){
		return (low + ' one_match'); }
		else if (divisor_array-low==0 && divisor_array-high==0) {
		return (low + ' all_match'); }
		else {
		return low }
}
divisor_array++;
}
}
