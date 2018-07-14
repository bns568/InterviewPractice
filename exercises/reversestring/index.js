// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedString = "";
    for (let i=(str.length -1); i >= 0; i--){
        reversedString += str[i];
    }
    return reversedString;
}

module.exports = reverse;
