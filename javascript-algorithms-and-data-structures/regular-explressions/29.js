let sampleWord = "astronaut";
let pwRegex = /(?=\w{0,5})(?=\D\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);