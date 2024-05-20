const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";

infoDisplay.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);

    gameboard.append(cellElement);
  });
}

createBoard();

function addGo(event) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  event.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "It is now " + go + "'s turn.";
  event.target.removeEventListener("click", addGo);
  checkScore();
}
const allSquares = document.querySelectorAll(".square");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkScore() {
  console.log;

  winningCombos.forEach((arr) => {
    if (check(arr, "circle")) {
      infoDisplay.textContent = "Circle Won!";
    } else if (check(arr, "cross")) {
      infoDisplay.textContent = "Cross Won!";
    } else {
      checkTie();
    }
    // const circleWins = arr.every((cell) =>
    //   allSquares[cell].firstChild?.classList.contains("circle")
    // );
    // const crossWins = arr.every((cell) =>
    //   allSquares[cell].firstChild?.classList.contains("cross")
    // );
    // if (circleWins) {
    //   infoDisplay.textContent = "Circle Won!";
    // } else if (crossWins) {
    //   infoDisplay.textContent = "Square Won";
    // }
  });
}

function check(arr, sign) {
  const ans = arr.every((cell) =>
    allSquares[cell].firstChild?.classList.contains(sign)
  );

  if (ans) {
    allSquares.forEach((square) => square.removeEventListener("click", addGo));
  }

  return ans;
}

function checkTie() {
  //converting the nodelist to an array so as to use .every
  const tie = Array.from(allSquares).every((square) => square.hasChildNodes());
  if (tie) {
    infoDisplay.textContent = "Draw";
  }
}
