function romanNumeral(string) {
	let total = 0;

  for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case "M":
				total = string[i - 1] === "C" ? total + 800 : total + 1000;
				break;
			case "D":
				total = string[i - 1] === "C" ? total + 300 : total + 500;
				break;
			case "C":
				total = string[i - 1] === "X" ? total + 80 : total + 100;
				break;
			case "L":
				total = string[i - 1] === "X" ? total + 30 : total + 50;
				break;
			case "X":
				total = string[i - 1] === "I" ? total + 8 : total + 10;
				break;
			case "V":
				total = string[i - 1] === "I" ? total + 3 : total + 5;
				break;
			default:
				total = total + 1;
		}
	}

	return total;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**************
 * initialize an empty array (stack)? --- maybe not necessary
 * initialize a count to keep track of total value of string
 * for loop through string
 * maybe create switch statement for each of the 7 possible chars, where we're switching on condition of previous char... string[i - 1]
 * then each case will be on of 7 chars
 * then switch statement ininside each condition?
 * 
 * 
 */
