// Assignment code here

// getting your password parameters

function passwordParameters() {
	var numOfChar = prompt("How many Character you want? Min of 6 & Max of 20 Characters")
	var numOfChar = parseInt(numOfChar)
	// console.log(typeof numOfChar, numOfChar)

	// minimum & maximum length of password 
	if (numOfChar < 5|| numOfChar > 20 || isNaN(numOfChar) === true) {
		alert("Enter valid value - Min of 6 & Max of 20 Characters")
	};

	var lowerCase = confirm("Do like to have lower case?")
	var upperCase = confirm("Do like to have upper case?")
	var symbol = confirm("Do like to have symbol")

	// making sure atleast they select one of the parameters
	if (lowerCase === false  || upperCase === false || symbol === false) {
		alert("you have to choose one of the parameters")
	} else {
		alert("Password minimum parameters requirements is OK ")
	}s
};

// passwordParameters();
function getLowerCase () {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpperCase () {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumber () {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol () {
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(getLowerCase());


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
