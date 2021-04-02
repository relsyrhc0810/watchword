// Assignment code here
//assigned the variable inputs

//Array of Lower Case characters
var lowerCaseChar = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

//Array of Upper Case characters
var upperCaseChar = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

//Array of numbers
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of symbols
var symbolChar = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.'
];

// getting your password parameters
function passwordParameters() {
	var numOfChar = parseInt(prompt("How many Character you want? Min of 6 & Max of 20 Characters"))

	// minimum & maximum length of password 
	if (numOfChar < 6 || numOfChar > 20 || isNaN(numOfChar) === true) {
		alert("Enter valid value - Min of 6 & Max of 20 Characters")
	};

	// select character symbol & number
	var lowerCase = confirm("Do like to have lower case character?")
	var upperCase = confirm("Do like to have upper case character?")
	var symbol = confirm("Do like to have symbol?")
	var num = confirm("Do like to have number?")

	// making sure atleast they select one of the parameters
	if (lowerCase === false && upperCase === false && symbol === false && num === false) {
		alert("You have to choose one of the parameters")
	} else {
		alert("Password minimum parameter requirements is OK!")
	}

	//this is where we stored the inputed parameters
	var enteredParameters = {
		length: numOfChar,
		lowerCase: lowerCase,
		upperCase: upperCase,
		symbol: symbol,
		num: num
	}
	return enteredParameters

};

//function that will select 
function randomizer(array) {
	var random = Math.floor(Math.random() * array.length)
	var randomIndex = array[random]

	return randomIndex
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
