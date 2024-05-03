const inputBox = document.querySelector("#input-box"),
  listContainer = document.querySelector(".list__container"),
  button = document.querySelector(".todo__adc button");

function addTask() {
  event.preventDefault();
  // Verifica se o campo foi preenchido
  if (inputBox.value === "") {
    alert("Você precisa escrever algo para ser adicionado...");
  } else {
    // Adiciona a nova task a lista de tasks.
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    li.classList.add("item-list");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTasks();
}

// Adiciona o evento de clique ao botão
button.addEventListener("click", addTask);

// Marca a Task como completa ou a deleta.
listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("cheked");
    saveTasks();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveTasks();
  }
});

// Salva as tasks no localStorage
function saveTasks() {
  localStorage.setItem("dataTasks", listContainer.innerHTML);
}

// Inicia a função que mostra as tasks salvas.
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("dataTasks");
}
showTasks();