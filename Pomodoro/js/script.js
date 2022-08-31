const container = document.querySelector(".container");
const btnStart = document.querySelector("#start");
const second = document.querySelector("#second");
const minutes = document.querySelector("#minutes");
const btnRestart = document.querySelector("#restart");
const audio = document.querySelector("audio");

let num;
let descanso = false;
let bucleSeconds;
let inProgress = false;

btnStart.addEventListener("click", () => {
  if (inProgress) {
    showAlert("Ya hay una actividad en proceso, Reinicia para iniciar una nueva");
  } else {
    showModal();
  }
});
btnRestart.onclick = () => restartPomodoro();

function app() {
  if (send && !inProgress) {
    hideCape();
    audio.play();
    minutes.textContent = Number(minutes.textContent)-1;
    startPomodoro();
  }
}

function startPomodoro() {
  second.textContent = 59;

  if (Number(second.textContent) !== 0) {
    getSeconds();
  } else {
    second.textContent = "00";
  }
}

function getSeconds() {
  num = Number(second.textContent);
  bucleSeconds = setInterval(() => {
    // console.log(num);
    newSecond = num;
    newSecond < 10
      ? (second.textContent = `0${newSecond}`)
      : (second.textContent = newSecond);

    num--;

    if (num < 0) {
      clearInterval(bucleSeconds);
      getMinutes();
    }
  }, 1000);
}

function getMinutes() {
  if (Number(minutes.textContent) <= 0 && Number(second.textContent) === 0) {
    pomodoroFinish();
  } else {
    if (Number(minutes.textContent) < 10) {
      let newMinute = Number(minutes.textContent) - 1;
      minutes.textContent = `0${newMinute}`;
      startPomodoro();
    } else {
      minutes.textContent = Number(minutes.textContent) - 1;
      startPomodoro();
    }
  }
}

function pomodoroFinish() {
  // alert("Te toca descanso");
  audio.play();
  startPomodoro();
  descanso ? (descanso = false) : (descanso = true);

  if (descanso) {
    startBreak();
  } else {
    removeBreak();
    
  }
}

function startBreak() {
  mensaje = document.createElement("p");
  mensaje.textContent = "Descanso";
  mensaje.classList.add("txtDescanso");
  container.appendChild(mensaje);

  minutes.textContent = "05";
  second.textContent = "00";
  container.children[0].style.color = "#2196f3";
  document.querySelector("body").style.background = "#031321";
}

function removeBreak() {
  const txtDescanso = document.querySelector(".txtDescanso");

  if (txtDescanso) {
    txtDescanso.remove();
  }
  minutes.textContent = "25";
  second.textContent = "00";
  container.children[0].style.color = "white";
  document.querySelector("body").style.background = "#333";
}

function restartPomodoro() {
  clearInterval(bucleSeconds);
  minutes.textContent = 25;
  second.textContent = "00";
  container.children[0].style.color = "white";
  document.querySelector("body").style.background = "#333";
  inProgress = false;
}
