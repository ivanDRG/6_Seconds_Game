var active = false;
var timer;
var highscorenumber = 0;

var highscore = document.getElementById("highscore");
var gamerules = document.getElementById("gamerulestext");
var countdown = document.getElementById("countdowntime");
var winscreen = document.getElementById("win");
var wintext = document.getElementById("wintext");

var gamerulestext =
  "You have to stop the count at six by pressing the button, GOOD LUCK!";
gamerules.innerHTML = gamerulestext;

var countdowntext = "00:00";
countdown.innerHTML = countdowntext;

var seconds = 00;
var milliseconds = 00;

function clicked() {
  if (active) {
    clearInterval(timer);
    var score = countdown.innerHTML;
    var scorenumber = seconds * 100 + milliseconds - 1;
    if (scorenumber == 600) {
      winscreen.classList.add("win");
      wintext.classList.add("wintext");
      wintext.classList.remove("invisible");
    } else if (highscorenumber < scorenumber && scorenumber < 600) {
      highscorenumber = scorenumber;
      highscore.innerHTML = score;
      setTimeout(function () {
        seconds = 0;
        milliseconds = 0;
        countdown.innerHTML =
          (seconds < 10 ? "0" + seconds : seconds) +
          ":" +
          (milliseconds < 10 ? "0" + milliseconds : milliseconds);
      }, 1000);
    } else {
      setTimeout(function () {
        seconds = 0;
        milliseconds = 0;
        countdown.innerHTML =
          (seconds < 10 ? "0" + seconds : seconds) +
          ":" +
          (milliseconds < 10 ? "0" + milliseconds : milliseconds);
      }, 1000);
    }
    active = false;
  } else {
    active = true;
    timer = setInterval(run, 10);
  }
}
function run() {
  countdown.innerHTML =
    (seconds < 10 ? "0" + seconds : seconds) + ":" + milliseconds;
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 10) {
    countdown.innerHTML = "you took too much time!<br> press to play again";
    clearInterval(timer);
  }
}
