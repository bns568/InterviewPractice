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
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    stringA = stringA.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    stringA = stringA.replace(/\s/g, "");

    stringB = stringB.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    stringB = stringB.replace(/\s/g, "");

    if (stringA.length != stringB.length){
        return false;
    }

    for (let i = 0; i < stringA.length; i++){

        for (let j = 0; j < stringB.length;) {
            
            if (stringA[i] == stringB[j]){
                stringB = stringB.replace(stringB[j], '');
                break;
            }

            else {
                j++;
            }

        }
    }

    if (stringB.length == 0) {
        return true;
    }
    else {
        return false; 
    }
}

module.exports = anagrams;
