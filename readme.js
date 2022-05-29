// Show hidden word
function displayWord() {
  /* CODE explanation =>

  const correctLetters = ['a', 'p', 'l', 'i', 'c', 't', 'o', 'n'];
  const words = ['application'];
  let selectedWord = words[Math.floor(Math.random() * words.length)];

  splitArr = selectedWord.split('');

  console.log(splitArr);

  const mappedArr = splitArr.map((letter) => {
    return `
      <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
      </span>
    `;
  });

  console.log(mappedArr);

  joinedArr = mappedArr.join('');

  //join('') will join arrays without anything in between, which is what we require here..

  console.log(joinedArr);

  // This will give some output which can be put inside an innerHTML..

  // Sample output
      <span class="letter">
        a
      </span>
    
      <span class="letter">
        p
      </span>
    
      <span class="letter">
        p
      </span>
    
      <span class="letter">
        l
      </span>
    
      <span class="letter">
        i
      </span>
    
      <span class="letter">
        c
      </span>
    
      <span class="letter">
        a
      </span>
    
      <span class="letter">
        t
      </span>
    
      <span class="letter">
        i
      </span>
    
      <span class="letter">
        o
      </span>
    
      <span class="letter">
        n
      </span>
  
  */
}
