// Arrays of words
var nouns = ["The turkey", "Mom" , "Dad",  "The dog", "My teacher", "The elephant", "The  cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var secondNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Function to generate a random word from an array
function getRandomWord(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

var phrase="";

// Function to concatenate the random words and display the phrase
function generatePhrase() {
  var noun = "";
  var verb = "";
  var adjective = "";
  var secondNoun = "";
  var place = "";
  
  switch (this.id) {
    case "nounButton":
      noun = getRandomWord(nouns);
      break;
    case "verbButton":
      verb = getRandomWord(verbs);
      break;
    case "adjectiveButton":
      adjective = getRandomWord(adjectives);
      break;
    case "secondNounButton":
      secondNoun = getRandomWord(secondNouns);
      break;
    case "placeButton":
      place = getRandomWord(places);
      break;
    case "surprise":
        noun = getRandomWord(nouns);
        verb = getRandomWord(verbs);
        adjective = getRandomWord(adjectives);
        secondNoun = getRandomWord(secondNouns);
        place = getRandomWord(places);
      break;
  }

  phrase = phrase + " " + noun + " " + verb + " " + adjective + " " + secondNoun + " " + place;
  document.getElementById("phraseOutput").textContent = phrase;

  return phrase;
}

// Function to speak the phrase using speech synthesis
function speakPhrase() {

  // Check if speech synthesis is supported
  if ('speechSynthesis' in window) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = phrase;
    speech.onend = function(event) {
      console.log('Speech synthesis finished');
    };
    speech.onerror = function(event) {
      console.error('Speech synthesis error occurred:', event.error);
    };
    
    window.speechSynthesis.speak(speech);
  } else {
    alert('Speech synthesis is not supported in your browser.');
  }
}

// Event listeners for button clicks
document.getElementById("nounButton").addEventListener("click", generatePhrase);
document.getElementById("verbButton").addEventListener("click", generatePhrase);
document.getElementById("adjectiveButton").addEventListener("click", generatePhrase);
document.getElementById("secondNounButton").addEventListener("click", generatePhrase);
document.getElementById("placeButton").addEventListener("click", generatePhrase);
document.getElementById("surprise").addEventListener("click", generatePhrase);
document.getElementById("speakButton").addEventListener("click", speakPhrase);
