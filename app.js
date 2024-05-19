const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

infoDisplay.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    // const circleElement = document.createElement("div");
    // circleElement.classList.add("circle");
    // cellElement.append(circleElement);
    // const crossElement = document.createElement("div");
    // crossElement.classList.add("cross");
    // cellElement.append(crossElement);
    gameboard.append(cellElement);
  });
}

createBoard();
