// this helps get data from the textbox
var information, remover;
var loop = 0;
function inputChecker() {
  information = document.getElementById("textContainer").value;
  for (let i = 0; i < information.length; i++) {
    const element = information[i];
    if (element == " ") {
      loop = 0;
    } else if (!/[a-zA-Z]/.test(element)) {
      loop = 1;
      document.getElementById("signsContainer").innerHTML =
        "Please ensure that the text is Alphabetic";
      break;
    } else {
      loop = 0;
    }
  }
  if (loop == 0) {
    userEntered(information);
  }
}

// function to clear everything
function clearing() {
  document.getElementById("textContainer").value = "";
  document.getElementById("signsContainer").innerHTML = "";
}

// stores user input and sends characters to the serving function
function userEntered(string) {
  const letters = string.split("");
  for (let i = 0; i < letters.length; i++) {
    serveImage(letters[i].toUpperCase());
  }
}

// this function serves the signs required
function serveImage(char) {
  switch (char) {
    case "A":
      showImage("/assets/A.png", 100, 90);
      break;
    case "B":
      showImage("/assets/B.png", 100, 90);
      break;
    case "C":
      showImage("/assets/C.png", 100, 90);
      break;
    case "D":
      showImage("/assets/D.png", 100, 90);
      break;
    case "E":
      showImage("/assets/E.png", 100, 90);
      break;
    case "F":
      showImage("/assets/F.png", 100, 90);
      break;
    case "G":
      showImage("/assets/G.png", 100, 90);
      break;
    case "H":
      showImage("/assets/H.png", 100, 90);
      break;
    case "I":
      showImage("/assets/I.png", 100, 90);
      break;
    case "J":
      showImage("/assets/J.png", 100, 90);
      break;
    case "K":
      showImage("/assets/K.png", 100, 90);
      break;
    case "L":
      showImage("/assets/L.png", 100, 90);
      break;
    case "M":
      showImage("/assets/M.png", 100, 90);
      break;
    case "N":
      showImage("/assets/N.png", 100, 90);
      break;
    case "O":
      showImage("/assets/O.png", 100, 90);
      break;
    case "P":
      showImage("/assets/P.png", 100, 90);
      break;
    case "Q":
      showImage("/assets/Q.png", 100, 90);
      break;
    case "R":
      showImage("/assets/R.png", 100, 90);
      break;
    case "S":
      showImage("/assets/S.png", 100, 90);
      break;
    case "T":
      showImage("/assets/T.png", 100, 90);
      break;
    case "U":
      showImage("/assets/U.png", 100, 90);
      break;
    case "V":
      showImage("/assets/V.png", 100, 90);
      break;
    case "W":
      showImage("/assets/W.png", 100, 90);
      break;
    case "X":
      showImage("/assets/X.png", 100, 90);
      break;
    case "Y":
      showImage("/assets/Y.png", 100, 90);
      break;
    case "Z":
      showImage("/assets/Z.png", 100, 90);
      break;

    default:
      break;
  }
}

function showImage(src, width, height) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  document.getElementById("signsContainer").appendChild(a);
}

function clear() {
  remover = document.getElementById("signsContainer");
  while (remover.firstChild) {
    remover.removeChild(remover.firstChild);
    remover.querySelectorAll("*").forEach((remo) => remo.remove());
  }
}

// under this is the game section

function runGame() {
  kill();
  showGameImage();
}

var random;
var randomCharacter;

function showGameImage() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  randomCharacter = alphabets[Math.floor(Math.random() * alphabets.length)];
  secondSwitch(randomCharacter);
}

function reveal(src, width, height) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width + 200;
  a.height = height + 200;
  document.getElementById("showImage").appendChild(a);
}

// this function serves the signs required
function secondSwitch(char) {
  switch (char) {
    case "A":
      reveal("/assets/A.png", 100, 90);
      break;
    case "B":
      reveal("/assets/B.png", 100, 90);
      break;
    case "C":
      reveal("/assets/C.png", 100, 90);
      break;
    case "D":
      reveal("/assets/D.png", 100, 90);
      break;
    case "E":
      reveal("/assets/E.png", 100, 90);
      break;
    case "F":
      reveal("/assets/F.png", 100, 90);
      break;
    case "G":
      reveal("/assets/G.png", 100, 90);
      break;
    case "H":
      reveal("/assets/H.png", 100, 90);
      break;
    case "I":
      reveal("/assets/I.png", 100, 90);
      break;
    case "J":
      reveal("/assets/J.png", 100, 90);
      break;
    case "K":
      reveal("/assets/K.png", 100, 90);
      break;
    case "L":
      reveal("/assets/L.png", 100, 90);
      break;
    case "M":
      reveal("/assets/M.png", 100, 90);
      break;
    case "N":
      reveal("/assets/N.png", 100, 90);
      break;
    case "O":
      reveal("/assets/O.png", 100, 90);
      break;
    case "P":
      reveal("/assets/P.png", 100, 90);
      break;
    case "Q":
      reveal("/assets/Q.png", 100, 90);
      break;
    case "R":
      reveal("/assets/R.png", 100, 90);
      break;
    case "S":
      reveal("/assets/S.png", 100, 90);
      break;
    case "T":
      reveal("/assets/T.png", 100, 90);
      break;
    case "U":
      reveal("/assets/U.png", 100, 90);
      break;
    case "V":
      reveal("/assets/V.png", 100, 90);
      break;
    case "W":
      reveal("/assets/W.png", 100, 90);
      break;
    case "X":
      reveal("/assets/X.png", 100, 90);
      break;
    case "Y":
      reveal("/assets/Y.png", 100, 90);
      break;
    case "Z":
      reveal("/assets/Z.png", 100, 90);
      break;

    default:
      break;
  }
}

function kill() {
  remover = document.getElementById("showImage");
  while (remover.firstChild) {
    remover.removeChild(remover.firstChild);
    remover.querySelectorAll("*").forEach((remo) => remo.remove());
  }
  document.getElementById("response").innerHTML = "";
  document.getElementById("textContainer2").value = "";
}

var userAnswer;
function answerCheck() {
  userAnswer = document.getElementById("textContainer2").value;
  userAnswer = userAnswer.toUpperCase();
  kill();
  if (userAnswer === randomCharacter) {
    outputResult("/assets/right.png", 320, 100);
  } else if (userAnswer !== randomCharacter) {
    outputResult("/assets/wrong.png", 320, 100);
  }
}

function outputResult(src, width, height) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  document.getElementById("response").appendChild(a);
}
