const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const popupChild = document.querySelector('.popup');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

let rightWord = document.createElement('p');

const words = [
  'application',
  'programming',
  'interface',
  'development',
  'wizard',
  'engineering',
  'developer',
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map((letter) => {
        return `
            <span class="letter">
              ${correctLetters.includes(letter) ? letter : ''}
            </span>
          `;
      })
      .join('')}
  `;

  // split() will split the selected word into array of letters
  // map() will create the required innerHTML for each letter
  // join() will concatenate all the elements of the mapped array and make it a string

  const innerWord = wordEl.innerText.replace(/\n/g, '');
  // replace new line globally with empty string
  // console.log(wordEl.innerText, innerWord);

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won! 😃';
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLetterEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map((letter) => ` <span>${letter}</span>`)}
  `;

  // map will output an array like this..
  // <span>b</span>,<span>o</span>,<span>p</span>
  // & since it is inside an innerHTML, it will convert it to HTML...

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost! 😕';

    // Display the right word
    // console.log('The right word is ', selectedWord);
    rightWord = document.createElement('p');
    rightWord.appendChild(
      document.createTextNode(`The word was '${selectedWord}'`)
    );
    finalMessage.insertAdjacentElement('afterend', rightWord);

    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', (e) => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    // console.log(letter);

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

playAgainBtn.addEventListener('click', () => {
  // Remove right word
  rightWord.remove();

  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // correctLetters = [];
  // wrongLetters = [];
  // can't reasign const... hence splice..

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
});

displayWord();
