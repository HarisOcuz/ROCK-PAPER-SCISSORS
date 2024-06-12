"use strict";

let playerName = document.getElementById("name-0");
const btnNew = document.querySelector(".btn");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const currentResult = document.querySelector(".result");
let currentScore0 = document.getElementById("current-0");
let currentScore1 = document.getElementById("current-1");
const btnPlay = document.querySelector(".btn-play");

////// Pocetni kriteriji
playerName.textContent = prompt("Unesi ime");
if (playerName.textContent == "fatima") {
  alert("Puno srece ljubavi");
} else alert(`Sretno ${playerName.textContent}`);

currentScore0.textContent = 0;
currentScore1.textContent = 0;

//////// Playet Winner
const playerWinner = function () {
  currentScore0.textContent = Number(currentScore0.textContent) + 1;
  if (currentScore1.textContent > 0)
    currentScore1.textContent = Number(currentScore1.textContent) - 1;
};
/////// Comp Winner

const compWinner = function () {
  currentScore1.textContent = Number(currentScore1.textContent) + 1;
  if (currentScore0.textContent > 0) {
    currentScore0.textContent = Number(currentScore0.textContent) - 1;
  }
};

///// Check TOTAL WINNER

const roundWinner = function () {
  if (Number(currentScore0.textContent) === 3) {
    currentResult.textContent = "UNESI IME JE POBJEDNIK";
    btnPlay.classList.add("hidden");
  } else if (Number(currentScore1.textContent) === 3) {
    currentResult.textContent = "KOMP JE POBJEDNIK";
    btnPlay.classList.add("hidden");
  }
};

////// ROCK DUGME
btnRock.addEventListener("click", function () {
  const choice = Math.trunc(Math.random() * 3 + 1);
  //   const choice = 3;
  console.log(choice);
  if (choice === 1) {
    currentResult.textContent = "Nerijeseno !";
  } else if (choice === 2) {
    currentResult.textContent = "Papir poklapa kamen 🗞";
    compWinner();
    roundWinner();
  } else if (choice === 3) {
    currentResult.textContent = "Kamen razbija makaze 💥";
    playerWinner();
    roundWinner();
  }
});

//////// PAPER DUGME

btnPaper.addEventListener("click", function () {
  const choice = Math.trunc(Math.random() * 3 + 1);
  console.log(choice);
  if (choice === 1) {
    currentResult.textContent = "Papir poklapa kamen 🗞";
    playerWinner();
    roundWinner();
  } else if (choice === 2) currentResult.textContent = "Nerijeseno !";
  else if (choice === 3) {
    currentResult.textContent = "Makaze rezu papir ✂📜";
    compWinner();
    roundWinner();
  }
});

///////// MAKAZE DUGME

btnScissors.addEventListener("click", function () {
  const choice = Math.trunc(Math.random() * 3 + 1);
  console.log(choice);
  if (choice === 1) {
    currentResult.textContent = "Kamen razbija makaze 💥";
    compWinner();
    roundWinner();
  } else if (choice === 2) {
    currentResult.textContent = "Makaze rezu papir ✂📜";
    playerWinner();
    roundWinner();
  } else if (choice === 3) currentResult.textContent = "Nerijeseno";
});

/////////// NOVA IGRA
btnNew.addEventListener("click", function () {
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  btnPlay.classList.remove("hidden");
  currentResult.textContent = "Puno srece";
  playerName.textContent = prompt("Unesite vase ime :");
  if (playerName.textContent == "fatima") {
    alert("Puno srece ljubavi");
  } else alert(`Sretno ${playerName.textContent}`);
});

/*
Treba ubaciti animacije
Treba popraviti web stranicu i optimizovati
Danasnji datum 12.06.2024.
Cilj optimizovati stranicu do 15.07.2024

YOU CAN DO IT !!!

*/
