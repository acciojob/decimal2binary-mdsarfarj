function decimalToBinary(num) {
  //Write you code here
	let ans="";
	while (num<0) {
		let rem=num%2;
		ans=rem+ans;
		num/=2;
	}
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
