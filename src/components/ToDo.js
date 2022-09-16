import { 
  StyledToDo, 
  ToDoInfo, 
  ToDoName,
  Control,
  ControlButton } from "./styles/ToDo.styled";

export default function ToDo() {
  return(
    <StyledToDo>
      <Control>
        <ControlButton></ControlButton>
      </Control>
      <ToDoInfo>
        <ToDoName>Send Package</ToDoName>
      </ToDoInfo>
    </StyledToDo>
  );
}