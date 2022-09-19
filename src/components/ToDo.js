import { 
  StyledToDo, 
  ToDoInfo, 
  ToDoName,
  Control,
  ControlButton, 
  DropdownImage,
  DropdownButton} from "./styles/ToDo.styled";

export default function ToDo({text}) {
  return(
    <StyledToDo>
      <Control>
        <ControlButton></ControlButton>
      </Control>
      <ToDoInfo>
        <ToDoName>Hello{text}</ToDoName>
        <DropdownButton>
          <DropdownImage src="./images/dropdown.svg"></DropdownImage>
        </DropdownButton>
      </ToDoInfo>
    </StyledToDo>
  );
}
