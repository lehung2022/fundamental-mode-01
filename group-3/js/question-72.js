// Detect different devices, method 1
/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    console.log("You are using a Mobile Device");
} else {
    console.log("You are using Desktop");
}
// Detect different devices, method 2
//#Source https://bit.ly/2neWfJ2 
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';
console.log(detectDeviceType()); // "Mobile" or "Desktop"
