// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// You may or may not need Regex for this

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();

    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    if (stringA.length != stringB.length){
        return false;
    }

    for (let i = 0; i < stringA.length; i++){
        for (let j = 0; j < stringB.length; j++) {
            if (stringA[i] == stringB[j]){
                stringB = stringB.replace(stringB[j], '');
                break;
            }
        }
    }

    return (stringB.length == 0);
}

module.exports = anagrams;
