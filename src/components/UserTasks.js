import { useState } from "react";
import { Flex } from "./styles/Flex.styled";
import { 
  ColumnTitle,
  InputContainer, 
  QuickAdd, 
  SearchBar, 
  StyledUserTasks, 
  TagsDropdown, 
  TagsLogo, 
  TagsSpan, 
  TasksColumn, 
  TasksContainer, 
  TasksFilter, 
  TasksList, 
  TasksNavigation,
  TasksFilterContainer,
  ItemsContainer } from "./styles/UserTasks.styled";
import Daily from "./Daily";
import Habit from "./Habit";
import ToDo from "./ToDo";
import Reward from "./Reward";

export default function UserTasks() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      { text: inputText, completed: false, id: Math.random()*1000 }
    ]);
    setInputText("");
  }

  return(
    <StyledUserTasks>
      <TasksContainer>
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
        <Flex>
          {/* Habits */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Habits</ColumnTitle> 
              <TasksFilterContainer>
                <TasksFilter>All</TasksFilter>
                <TasksFilter>Weak</TasksFilter>
                <TasksFilter>Strong</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a Habit"></QuickAdd>
              <Habit></Habit>
            </TasksList>
          </TasksColumn>
          {/* Dailies */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Dailies</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter>All</TasksFilter>
                <TasksFilter>Due</TasksFilter>
                <TasksFilter>Not Due</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a Daily"></QuickAdd>
              <Daily></Daily>
            </TasksList>
          </TasksColumn>
          {/* To do's */}
          <TasksColumn>
            <form onSubmit={submitTodoHandler} >
              <Flex>
                <ColumnTitle>To Do's</ColumnTitle>
                <TasksFilterContainer>
                  <TasksFilter>Active</TasksFilter>
                  <TasksFilter>Scheduled</TasksFilter>
                  <TasksFilter>Complete</TasksFilter>
                </TasksFilterContainer>
              </Flex>
              <TasksList>
                <QuickAdd 
                  value={inputText}
                  type={"text"}
                  onChange={inputTextHandler} 
                  placeholder="Add a To Do"></QuickAdd>
                  {todos.map((todo) => (
                    <ToDo key={todo.id} text={todo.text} />
                  ))}
                  <ToDo/>
              </TasksList>
            </form>
            
          </TasksColumn>
          {/* Rewards */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Rewards</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter>All</TasksFilter>
                <TasksFilter>Custom</TasksFilter>
                <TasksFilter>Wishlist</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a Reward"></QuickAdd>
              <ItemsContainer>
                <Reward></Reward>
                <Reward></Reward>
              </ItemsContainer>
            </TasksList>
          </TasksColumn>
        </Flex>
      </TasksContainer>
    </StyledUserTasks>
  );
}