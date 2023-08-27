const iniciar = document.getElementById("iniciar");
const resetar = document.getElementById("resetar");
const numberTime = document.getElementById("numberTime");
const display = document.querySelector("#timer");

const startAudio = document.querySelector("#startAudio");
const endAudio = document.querySelector("#endAudio");

let interval;

iniciar.onclick = () => iniciarTimer();

const iniciarTimer = () => {
  let duration = numberTime.value * 60;
  let timer = duration,
    minutes,
    seconds;

  clearInterval(interval);

  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Tempo Acabou!";
      endAudio.play();
    }

  }, 1000);
  startAudio.play();
};

resetar.addEventListener("click", function () {
  clearInterval(interval);
  display.textContent = "00:00";
});
