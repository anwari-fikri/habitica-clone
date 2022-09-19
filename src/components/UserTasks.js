import { useState, useEffect } from "react";
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
  ItemsContainer, 
  NoTaskText} from "./styles/UserTasks.styled";
import Daily from "./Daily";
import Habit from "./Habit";
import ToDo from "./ToDo";
import Reward from "./Reward";

export default function UserTasks() {
  // State

  // todos
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("active");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // Dailies
  const [dailyText, setDailyText] = useState("");
  const [daily, setDaily] = useState([]);
  const [dailyStatus, setDailyStatus] = useState("all");
  const [filteredDaily, setFilteredDaily] = useState([]);

  // Habits
  const [habitText, setHabitText] = useState("");
  const [habits, setHabits] = useState([]);
  const [habitStatus, setHabitStatus] = useState("all");
  const [filteredHabits, setFilteredHabits] = useState([]);


  // useEffect
  useEffect(() => {
    todoFilterHandler();
    dailyFilterHandler();
    habitFilterHandler();
  // eslint-disable-next-line
  }, [todos, todoStatus, daily, dailyStatus, habits, habitStatus]);


  // Function

  // To do's
  const todoTextHandler = (e) => {
    setTodoText(e.target.value);
  };
  
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      { text: todoText, completed: false, id: Math.random()*1000 }
    ]);
    setTodoText("");
  };

  const todoStatusHandler = (e) => {
    setTodoStatus(e)
  };

  const todoFilterHandler = () => {
    switch(todoStatus) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Dailies
  const dailyTextHandler = (e) => {
    setDailyText(e.target.value);
  };

  const submitDailyHandler = (e) => {
    e.preventDefault();
    setDaily([
      ...daily, 
      { text: dailyText, counter: 0, completed: false, id: Math.random()*1000 }
    ]);
    setDailyText("");
  };

  const dailyStatusHandler = (e) => {
    setDailyStatus(e)
  };

  const dailyFilterHandler = () => {
    switch(dailyStatus) {
      case 'notDue':
        setFilteredDaily(daily.filter(dail => dail.completed === true));
        break;
      case 'due':
        setFilteredDaily(daily.filter(dail => dail.completed === false));
        break;
      default:
        setFilteredDaily(daily);
        break;
    }
  };

  // Habit
  const habitTextHandler = (e) => {
    setHabitText(e.target.value);
  };

  const submitHabitHandler = (e) => {
    e.preventDefault();
    setHabits([
      ...habits, 
      { text: habitText, 
        strength: 'neutral', 
        plusCounter: 0, 
        minusCounter: 0, 
        id: Math.random()*1000 }
    ]);
    setHabitText("");
  };

  const habitStatusHandler = (e) => {
    setHabitStatus(e)
  };

  const habitFilterHandler = () => {
    switch(habitStatus) {
      case 'strong':
        setFilteredHabits(habits.filter(habit => 
          (habit.strength).includes("strong") || (habit.strength).includes("neutral")));
        break;
      case 'weak':
        setFilteredHabits(habits.filter(habit => 
          (habit.strength).includes("weak")));
        break;
      default:
        setFilteredHabits(habits);
        break;
    }
  };


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
                <TasksFilter onClick={(e) => habitStatusHandler("all")}>All</TasksFilter>
                <TasksFilter onClick={(e) => habitStatusHandler("weak")}>Weak</TasksFilter>
                <TasksFilter onClick={(e) => habitStatusHandler("strong")}>Strong</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <form onSubmit={submitHabitHandler}>
                <QuickAdd 
                  value={habitText}
                  onChange={habitTextHandler}
                  type={"text"}
                  placeholder="Add a Habit">
                </QuickAdd>
              </form>
              {filteredHabits.length 
                ? filteredHabits.map((habit) => (
                    <Habit 
                      habit={habit}
                      habits={habits}
                      setHabits={setHabits}
                      key={habit.id} 
                      text={habit.text} 
                    />
                  )) 
                : <NoTaskText>You do not have any Habits</NoTaskText>
              }
            </TasksList>
          </TasksColumn>
          {/* Dailies */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Dailies</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter onClick={(e) => dailyStatusHandler("all")}>All</TasksFilter>
                <TasksFilter onClick={(e) => dailyStatusHandler("due")}>Due</TasksFilter>
                <TasksFilter onClick={(e) => dailyStatusHandler("notDue")}>Not Due</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <form onSubmit={submitDailyHandler}>
                <QuickAdd 
                  value={dailyText}
                  onChange={dailyTextHandler}
                  type={"text"}
                  placeholder="Add a Daily">
                </QuickAdd>
              </form>
              {filteredDaily.length 
                ? filteredDaily.map((dail) => (
                    <Daily 
                      dail={dail}
                      daily={daily}
                      setDaily={setDaily}
                      key={dail.id} 
                      text={dail.text} 
                    />
                  )) 
                : <NoTaskText>You do not have any Dailies</NoTaskText>
              }
            </TasksList>
          </TasksColumn>
          {/* To do's */}
          <TasksColumn>
              <Flex>
                <ColumnTitle>To Do's</ColumnTitle>
                <TasksFilterContainer>
                  <TasksFilter onClick={(e) => todoStatusHandler("active")}>Active</TasksFilter>
                  <TasksFilter onClick={(e) => todoStatusHandler("all")}>All</TasksFilter>
                  <TasksFilter onClick={(e) => todoStatusHandler("complete")}>Complete</TasksFilter>
                </TasksFilterContainer>
              </Flex>
              <TasksList>
                <form onSubmit={submitTodoHandler} >
                  <QuickAdd 
                    value={todoText}
                    onChange={todoTextHandler} 
                    type={"text"}
                    placeholder="Add a To Do">  
                  </QuickAdd>
                </form>
                {filteredTodos.length 
                  ? filteredTodos.map((todo) => (
                      <ToDo 
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id} 
                        text={todo.text} 
                      />
                    )) 
                  : <NoTaskText>You do not have any To Do's</NoTaskText>
                }


              </TasksList>
            
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