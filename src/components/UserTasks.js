import { 
  InputContainer, 
  SearchBar, 
  StyledUserTasks, 
  TagsDropdown, 
  TagsLogo, 
  TagsSpan, 
  TasksNavigation } from "./styles/UserTasks.styled";

export default function UserTasks() {
  return(
    <StyledUserTasks>
      <TasksNavigation>
        <InputContainer>
          <SearchBar placeholder="Search"></SearchBar>
          <TagsDropdown>
            <TagsLogo src="./images/tags.svg"></TagsLogo>
            <TagsSpan>Tags</TagsSpan>
            <TagsSpan style={{margin:"4px 0 -3px 0"}}>🞃</TagsSpan>
          </TagsDropdown>
        </InputContainer>
      </TasksNavigation>
    </StyledUserTasks>
  );
}