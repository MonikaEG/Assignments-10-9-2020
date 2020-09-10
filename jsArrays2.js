const str = 'regninger';
const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, ''); //fjerner alle ekstra tegn, hvis den indtastede string fx er en længere sætning, så funktionen kun fokuserer på bogstaverne.
    inStr = inStr.toLowerCase(); //konverterer hele den valgte string til lowercase, så der ikke opstår problemer med evt. store forbogstaver.
    
    return inStr === inStr.split('').reverse().join(''); //splitter en string op i et array, derefter gennemgår det nye array/string bagfra og .join samler det til et string igen.
}

console.log(isPalindrome(str));