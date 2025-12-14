let timer = document.querySelector(".timer");
let startbtn = document.querySelector("#startbtn");
let stopbtn = document.querySelector("#stopbtn");
let resetbtn = document.querySelector("#resetbtn");

// 1 tick ≈ 10ms
// 100 ticks ≈ 100 × 10ms = 1000ms = 1 second

let tick = 0;
let secs = 0;
let min = 0;

let time = null;

startbtn.addEventListener("click", () => {
  if (time !== null) return;

  time = setInterval(() => {
    tick++;
    if (tick === 100) {
      tick = 0;
      secs++;
      if (secs === 60) {
        secs = 0;
        min++;
      }
    }
    timer.textContent =
      `${String(min).padStart(2, "0")}:` +
      `${String(secs).padStart(2, "0")}:` +
      `${String(tick).padStart(2, "0")}`;
  }, 10);
});

stopbtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
});

resetbtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
  tick = 0;
  secs = 0;
  min = 0;
  timer.textContent="00:00:00"
});
