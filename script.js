function decimalToBinary(decimal) {
  //Write you code here
if (decimal === 0) {
    return "0";
  }

  let binary = "";
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
