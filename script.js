// this helps get data from the textbox
var information, remover;
function inputChecker() {
  information = document.getElementById("textContainer").value;
  userEntered(information);
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
      showImage("/assets/ASL_signs/A.png", 100, 90);
      break;
    case "B":
      showImage("/assets/ASL_signs/B.png", 100, 90);
      break;
    case "C":
      showImage("/assets/ASL_signs/C.png", 100, 90);
      break;
    case "D":
      showImage("/assets/ASL_signs/D.png", 100, 90);
      break;
    case "E":
      showImage("/assets/ASL_signs/E.png", 100, 90);
      break;
    case "F":
      showImage("/assets/ASL_signs/F.png", 100, 90);
      break;
    case "G":
      showImage("/assets/ASL_signs/G.png", 100, 90);
      break;
    case "H":
      showImage("/assets/ASL_signs/H.png", 100, 90);
      break;
    case "I":
      showImage("/assets/ASL_signs/I.png", 100, 90);
      break;
    case "J":
      showImage("/assets/ASL_signs/J.png", 100, 90);
      break;
    case "K":
      showImage("/assets/ASL_signs/K.png", 100, 90);
      break;
    case "L":
      showImage("/assets/ASL_signs/L.png", 100, 90);
      break;
    case "M":
      showImage("/assets/ASL_signs/M.png", 100, 90);
      break;
    case "N":
      showImage("/assets/ASL_signs/N.png", 100, 90);
      break;
    case "O":
      showImage("/assets/ASL_signs/O.png", 100, 90);
      break;
    case "P":
      showImage("/assets/ASL_signs/P.png", 100, 90);
      break;
    case "Q":
      showImage("/assets/ASL_signs/Q.png", 100, 90);
      break;
    case "R":
      showImage("/assets/ASL_signs/R.png", 100, 90);
      break;
    case "S":
      showImage("/assets/ASL_signs/S.png", 100, 90);
      break;
    case "T":
      showImage("/assets/ASL_signs/T.png", 100, 90);
      break;
    case "U":
      showImage("/assets/ASL_signs/U.png", 100, 90);
      break;
    case "V":
      showImage("/assets/ASL_signs/V.png", 100, 90);
      break;
    case "W":
      showImage("/assets/ASL_signs/W.png", 100, 90);
      break;
    case "X":
      showImage("/assets/ASL_signs/X.png", 100, 90);
      break;
    case "Y":
      showImage("/assets/ASL_signs/Y.png", 100, 90);
      break;
    case "Z":
      showImage("/assets/ASL_signs/Z.png", 100, 90);
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
