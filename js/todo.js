const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/**로컬스토리지 key값 */
const TODOS_KEY = "toDos";

let toDos = [];

/**로컬스토리지에 배열을 문자열로 저장 */
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  //클릭되는 button의 부모 요소 li를 찾아서 해당 li만 화면에서 삭제함
  const li = event.target.parentElement;
  li.remove();
  //배열 요소들의 id 값과 클릭된 버튼의 부모 요소의 id 값이 같으면 filter
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  //삭제된 배열을 로컬스토리지에 다시 저장
  saveToDos();

  if(toDos.length <= 5){
    toDoInput.disabled = false;
  }
}

/**할 일 그리기 */
function paintTodo(newTodoObj){
  const li = document.createElement("li");
  const span = document.createElement("span");
  //li id에 할 일의 랜덤 값을 저장
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.content;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);
  toDoList.appendChild(li);

  //할 일 목록이 6개 이상이면 input 비활성화 & submit 막기
  if(toDos.length > 5){
    toDoInput.disabled = true;
  }
}

/**할 일 한 개를 입력했을 경우 */
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    id : Date.now(),
    content : newTodo,
  };

  toDoInput.value = ""; //초기화
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

/**로컬스토리지에 이전 정보가 있는 경우 */
if(savedToDos !== null){
  const parsedToDo = JSON.parse(savedToDos);
  //이전 할 일 정보를 배열에 저장
  toDos = parsedToDo;
  parsedToDo.forEach(paintTodo);
}