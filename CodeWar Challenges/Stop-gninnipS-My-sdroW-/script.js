// function spinWords(character){
//   var characters =[];
  
//   for (var i= 0; i< character.length; i++) {
//   if (character[i].length < 5) {
//   characters.push(i)
//   } else 
//   characters.push(i.reverse)
//   }
//   return characters.toString(i);
//   }

function spinWords(phrase) {
    let currentWord = "";
    let currentWordReversed = "";
    let currentPhrase = "";
  
    // add trailing space so that we still add the last word onto the phrase
    phrase += " ";
  

    // Option 1
    for (let i = 0; i < phrase.length; i++) {
      let currentLetter = phrase[i];
      if (currentLetter === " ") {
        if (currentWord.length < 5) {
          currentPhrase += currentWord;
        } else {
          currentPhrase += currentWordReversed;
        }
        if (currentPhrase.length !== phrase.length - 1) currentPhrase += " ";
        currentWord = "";
        currentWordReversed = "";
      } else {
        currentWord = currentWord + currentLetter;
        currentWordReversed = currentLetter + currentWordReversed;
      }
    }
    return currentPhrase;
  }
  

  // Option 2
  function spinWordsShort(phrase) {
    phrase = phrase.split(" ");
    let newPhrase = "";
  
    phrase.forEach(word => {
      if (word.length > 5) {
        newPhrase += Array.from(word)
          .reverse()
          .join("");
      } else {
        newPhrase += word;
      }
      newPhrase += " "
    });
    return newPhrase;
  }
  

  // Optiopn 3
  function spinWordsSuperShort(phrase){
    return phrase.split(' ').map(word => {
      return (word.length > 5) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }