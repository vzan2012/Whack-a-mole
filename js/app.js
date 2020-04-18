// Scripts

const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

let randomSquare = () => {
  square.forEach((classList) => {
    classList.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(9 * Math.random())];

  randomPosition.classList.add("mole");

  //   Assign id of randomPosition to hitPosition
  hitPosition = randomPosition.id;
};

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result += 1;
      score.textContent = result;
    }
  });
});

let moveMole = () => {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
};

moveMole();

let countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`Game Over - Your Score is ${result}`);
    location.reload();
  }
};

let timerId = setInterval(countDown, 1000);
