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
      showImage("/ASLearn/assets/A.png", 100, 90);
      break;
    case "B":
      showImage("/ASLearn/assets/B.png", 100, 90);
      break;
    case "C":
      showImage("/ASLearn/assets/C.png", 100, 90);
      break;
    case "D":
      showImage("/ASLearn/assets/D.png", 100, 90);
      break;
    case "E":
      showImage("/ASLearn/assets/E.png", 100, 90);
      break;
    case "F":
      showImage("/ASLearn/assets/F.png", 100, 90);
      break;
    case "G":
      showImage("/ASLearn/assets/G.png", 100, 90);
      break;
    case "H":
      showImage("/ASLearn/assets/H.png", 100, 90);
      break;
    case "I":
      showImage("/ASLearn/assets/I.png", 100, 90);
      break;
    case "J":
      showImage("/ASLearn/assets/J.png", 100, 90);
      break;
    case "K":
      showImage("/ASLearn/assets/K.png", 100, 90);
      break;
    case "L":
      showImage("/ASLearn/assets/L.png", 100, 90);
      break;
    case "M":
      showImage("/ASLearn/assets/M.png", 100, 90);
      break;
    case "N":
      showImage("/ASLearn/assets/N.png", 100, 90);
      break;
    case "O":
      showImage("/ASLearn/assets/O.png", 100, 90);
      break;
    case "P":
      showImage("/ASLearn/assets/P.png", 100, 90);
      break;
    case "Q":
      showImage("/ASLearn/assets/Q.png", 100, 90);
      break;
    case "R":
      showImage("/ASLearn/assets/R.png", 100, 90);
      break;
    case "S":
      showImage("/ASLearn/assets/S.png", 100, 90);
      break;
    case "T":
      showImage("/ASLearn/assets/T.png", 100, 90);
      break;
    case "U":
      showImage("/ASLearn/assets/U.png", 100, 90);
      break;
    case "V":
      showImage("/ASLearn/assets/V.png", 100, 90);
      break;
    case "W":
      showImage("/ASLearn/assets/W.png", 100, 90);
      break;
    case "X":
      showImage("/ASLearn/assets/X.png", 100, 90);
      break;
    case "Y":
      showImage("/ASLearn/assets/Y.png", 100, 90);
      break;
    case "Z":
      showImage("/ASLearn/assets/Z.png", 100, 90);
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
      reveal("/ASLearn/assets/A.png", 100, 90);
      break;
    case "B":
      reveal("/ASLearn/assets/B.png", 100, 90);
      break;
    case "C":
      reveal("/ASLearn/assets/C.png", 100, 90);
      break;
    case "D":
      reveal("/ASLearn/assets/D.png", 100, 90);
      break;
    case "E":
      reveal("/ASLearn/assets/E.png", 100, 90);
      break;
    case "F":
      reveal("/ASLearn/assets/F.png", 100, 90);
      break;
    case "G":
      reveal("/ASLearn/assets/G.png", 100, 90);
      break;
    case "H":
      reveal("/ASLearn/assets/H.png", 100, 90);
      break;
    case "I":
      reveal("/ASLearn/assets/I.png", 100, 90);
      break;
    case "J":
      reveal("/ASLearn/assets/J.png", 100, 90);
      break;
    case "K":
      reveal("/ASLearn/assets/K.png", 100, 90);
      break;
    case "L":
      reveal("/ASLearn/assets/L.png", 100, 90);
      break;
    case "M":
      reveal("/ASLearn/assets/M.png", 100, 90);
      break;
    case "N":
      reveal("/ASLearn/assets/N.png", 100, 90);
      break;
    case "O":
      reveal("/ASLearn/assets/O.png", 100, 90);
      break;
    case "P":
      reveal("/ASLearn/assets/P.png", 100, 90);
      break;
    case "Q":
      reveal("/ASLearn/assets/Q.png", 100, 90);
      break;
    case "R":
      reveal("/ASLearn/assets/R.png", 100, 90);
      break;
    case "S":
      reveal("/ASLearn/assets/S.png", 100, 90);
      break;
    case "T":
      reveal("/ASLearn/assets/T.png", 100, 90);
      break;
    case "U":
      reveal("/ASLearn/assets/U.png", 100, 90);
      break;
    case "V":
      reveal("/ASLearn/assets/V.png", 100, 90);
      break;
    case "W":
      reveal("/ASLearn/assets/W.png", 100, 90);
      break;
    case "X":
      reveal("/ASLearn/assets/X.png", 100, 90);
      break;
    case "Y":
      reveal("/ASLearn/assets/Y.png", 100, 90);
      break;
    case "Z":
      reveal("/ASLearn/assets/Z.png", 100, 90);
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
    outputResult("/ASLearn/assets/right.png", 320, 100);
  } else if (userAnswer !== randomCharacter) {
    outputResult("/ASLearn/assets/wrong.png", 320, 100);
  }
}

function outputResult(src, width, height) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  document.getElementById("response").appendChild(a);
}
