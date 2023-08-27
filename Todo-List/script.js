const newTask = document.getElementById("NewTask");

newTask.onclick = () => {
  newTaskItem();
};

/**
 * @function newTaskItem - Cria novos elementos na lista de tarefas, 
 * permite marcar e desmarcar tarefas como concluídas com uma checkbox, 
 * adiciona a classe "feita" ao conteúdo das tarefas concluídas, programa 
 * a remoção automática das tarefas concluídas após 5 segundos e permite a remoção 
 * manual das tarefas por meio do botão "Remover".
 */
const newTaskItem = () => {
  const taskList = document.getElementById("taksList");

  const list = document.createElement("li");

  const listContainer = document.createElement("div");
  listContainer.classList.add("tasks");

  const infoTask = document.createElement("div");
  infoTask.classList.add("infoTask")
  infoTask.innerHTML = `<input type='checkbox' class='concluida'><input type='text' class='content'><button class='removeTaks'>Remover</button>`;

  listContainer.appendChild(infoTask);
  list.appendChild(listContainer);
  taskList.appendChild(list);
  console.log("Nova tarefa criada");

  const concluida = listContainer.querySelector(".concluida");
  const content = listContainer.querySelector(".content");
  const removeTaks = listContainer.querySelector(".removeTaks");

  /**
   * @param {Event} concluida - monitora a checkbox de conclusão da tarefa. Quando a 
   * checkbox é marcada como concluída (checked), ele exibe uma mensagem no 
   * console, adiciona uma classe de estilização à tarefa para indicar que 
   * ela está concluída e programa um timeout para remover a tarefa após 5 
   * segundos. Se a checkbox for desmarcada (unchecked), ele reverte todas 
   * essas ações, removendo a classe de estilização e cancelando o timeout 
   * para que a tarefa não seja removida automaticamente.
   */
  concluida.addEventListener("change", function () {
    if (this.checked) {
      console.log("Tarefa feita");
      content.classList.add("feita");
    } else {
      console.log("Tarefa não feita");
      content.classList.remove("feita");
    }
  });

  removeTaks.addEventListener("click", function () {
    taskList.removeChild(list);
  });
};
