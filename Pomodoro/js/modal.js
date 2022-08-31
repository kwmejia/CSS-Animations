const btnCancel = document.querySelector("#btnCancel");
const contTheme = document.querySelector(".cont-theme");
const btnSend = document.querySelector("#btnSend");

let send = false;

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
  hideCape();
});
btnSend.addEventListener("click", validate);

function showModal() {
  contTheme.style.display = "flex";
  contTheme.style.animation = "showModal  .7s linear";
  createCape();
}

function hideModal() {
  contTheme.style.animation = "hiddeModal  1.5s linear";
  setTimeout(() => {
    contTheme.style.display = "none";
  }, 1000);
}

function validate(e) {
  e.preventDefault();
  const input = document.querySelector("#input").value;
  if (input === "") {
    showMessage("Todos los campos son obligatorios", "error");
  } else {
    showMessage("Iniciando Pomodoro...");
    setTimeout(() => {
      hideModal();
      send = true;
      app();
      inProgress = true;
      document.querySelector("form").reset();
    }, 3100);
  }
}

function showMessage(menssage, type) {
  const divAlert = document.createElement("div");
  type === "error"
    ? divAlert.classList.add("alertError")
    : divAlert.classList.add("alertSucces");
  divAlert.textContent = menssage;
  divAlert.id = "alert";

  const existAlert = document.querySelector("#alert");

  if (!existAlert) {
    document.querySelector("#theme").appendChild(divAlert);
    setTimeout(() => {
      divAlert.remove();
    }, 3000);
  }
}

function showAlert(menssage) {
  const divAlert = document.createElement("div");
  divAlert.classList.add("alert");
  divAlert.textContent = menssage;
  const existAlert = document.querySelector(".alert");

  if (!existAlert) {
    document.body.appendChild(divAlert);
    setTimeout(() => {
      divAlert.style.animation = "hiddeModal  1.5s linear";
    }, 4000);
    setTimeout(() => {
      divAlert.remove();
    }, 4500);
  }
}

function createCape() {
  const cape = document.createElement("div");
  cape.classList.add("cape");
  document.body.appendChild(cape);
}

function hideCape(){
    const cape = document.querySelector('.cape');
    if (cape) {
        cape.remove();
    }
}