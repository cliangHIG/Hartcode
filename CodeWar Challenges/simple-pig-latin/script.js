// function pigIt(str) {
//   //Code here

//   for (var i = 0; i < str.length; i++) {
//     var firstLetter = str.slice(0, 1);
//     var otherLetters = str.slice(1);
//     var newLetters = str.split("").join("");
//     newLetter = otherLetters + firstLetter + "ay";
//   }
//   return newLetter;
// }

function pigLatin(str) {
  str = str.split(" ");
  for (i = 0; i < str.length; i++) {
    let first = str[i].slice(0, 1);
    let rest = str[i].slice(1);
    str[i] = rest + first + "ay";
  }
  str = str.join(" ");
  return str;
}

//break the sentence into words
//break words on space

function pigLatin(phrase) {
  // phrase = phrase.split('')

  let splitPhrase = [];
  let word = "";
  phrase += " ";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      splitPhrase.push(word);
      word = "";
    } else {
      word += phrase[i];
    }
  }
  console.log(
    splitPhrase.map(word => word.slice(1) + word[0] + "ay").join(" ")
  );
}
pigLatin("Pig Latin is cool");

function removeDuplicateWords(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    let str1 = "";
    str.filter(word => {
      str[i] !== str1;
    });
  }
  str = str.join(" ");
  return str;
}

function removeDuplicateWords(str) {
  str = str.split(" ");
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    let str1 = "";
    if (str[i] === str1) {
      str.remove(str[i]);
    }
  }
  str = str.join(" ");
  return str;
}

function removeDuplicateWords(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str.forEach(word => {
      let word = "a";
      if (word !== word) {
        str += word;
      }
    });
  }
  str = str.join(" ");
  return str;
}

function removeDuplicateWords(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i]) {
      str += str[i];
    }
  }
  str = str.join(" ");
  return str;
}
