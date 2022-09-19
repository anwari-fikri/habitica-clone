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
    setTodos(todos.filter(el => el.id !== todo.id));
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
      <Control>
        <ControlButton onClick={completeHandler}>
          <ControlImage src="./images/tick.svg"></ControlImage>
        </ControlButton>
      </Control>
      <ToDoInfo>
        <ToDoName>{text}</ToDoName>
        <DeleteButton onClick={deleteHandler}>
          <DeleteImage src="./images/trash.svg"></DeleteImage>
        </DeleteButton>
      </ToDoInfo>
    </StyledToDo>
  );
}
