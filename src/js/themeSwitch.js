const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let interval = null;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStartBtnClick() {
  if (refs.startBtn.disabled) {
    return;
  }
  refs.startBtn.disabled = true;
  interval = setInterval(() => setRandomColor(), 1000);
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(interval);
}
