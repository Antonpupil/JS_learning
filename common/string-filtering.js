const string = "Привет! Как дела?";
const vowelsArr = ["и", "е", "а"];

const getVowels = stringToFilter => {

    let extractedVowel = "";
    
    for ( let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    
    if (vowelsArr.includes(currentLetter)) {
        extractedVowel += currentLetter + " ";
    }
}
return extractedVowel;
}
console.log(getVowels(string));