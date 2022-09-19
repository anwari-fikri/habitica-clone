import { 
  StyledToDo, 
  ToDoInfo, 
  ToDoName,
  Control,
  ControlButton, 
  DeleteImage,
  DeleteButton,
  ControlImage} from "./styles/ToDo.styled";

export default function ToDo({ todo, todos, setTodos, text }) {
  let audio = new Audio("./sound/complete.mp3");
  audio.volume = 0.2;
  
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
    audio.play();
  };

  const deleteHandler = () => {
    text = "Are you sure you want to delete To Do?";
    if (window.confirm(text) === true) {
      setTodos(todos.filter(el => el.id !== todo.id));
    }
  };

  return(
    <StyledToDo>
      <Control complete={todo.completed}>
        <ControlButton onClick={completeHandler}>
          <ControlImage 
            complete={todo.completed} 
            src="./images/tick.svg"
          />
        </ControlButton>
      </Control>
      <ToDoInfo>
        <ToDoName complete={todo.completed}>{text}</ToDoName>
        <DeleteButton onClick={deleteHandler}>
          <DeleteImage src="./images/trash.svg"></DeleteImage>
        </DeleteButton>
      </ToDoInfo>
    </StyledToDo>
  );
}
