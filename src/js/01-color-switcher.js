const startBtn = document.querySelector('button[data-start]');
const endBtn = document.querySelector('button[data-stop]');

let timerId = null;
let clickBtn = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  if (clickBtn) return;
  clickBtn = true;
  console.log(startBtn);
  startBtn.disabled = true;
  endBtn.disabled = false;
  timerId = setInterval(() => {
   document.body.style.backgroundColor = getRandomHexColor()
  }, 1000);
});


endBtn.addEventListener('click', () => {
  if (!clickBtn) return;
  clickBtn = false;
  console.log(endBtn);
  clearInterval(timerId);
  startBtn.disabled = false;
  endBtn.disabled = true;
    // document.body.style.backgroundColor = "white";
  
});