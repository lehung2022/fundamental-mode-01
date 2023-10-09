// Function to convert comma-separate
// string to attay
function separateString() {
	// Input string
	originalString = "One, Two, Three, Four, Five";
	
	// Converted array
	separatedArray = originalString.split(', ');
	
	// Display output 
	console.log(separatedArray);
}

separateString();