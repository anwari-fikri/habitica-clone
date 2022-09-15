import { Flex } from "./styles/Flex.styled";
import { 
  ColumnTitle,
  InputContainer, 
  ControlButton, 
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
  Habit,
  Control, 
  HabitLogo,
  HabitInfo,
  HabitStreakContainer,
  HabitStreak,
  HabitName,
  TasksFilterContainer} from "./styles/UserTasks.styled";

export default function UserTasks() {
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
              <Habit>
                <Control left>
                    <ControlButton>
                      <HabitLogo src="./images/plus-sign.svg"></HabitLogo>
                    </ControlButton>
                </Control>
                <HabitInfo>
                  <HabitName>Wake up before 9</HabitName>
                  <HabitStreakContainer>
                    <HabitLogo src="./images/fast-forward.svg"></HabitLogo>
                    <HabitStreak>+1 | -1</HabitStreak>
                    <HabitLogo src="./images/habit-tags.svg"></HabitLogo>
                  </HabitStreakContainer>
                </HabitInfo>
                <Control>
                  <ControlButton>
                    <HabitLogo src="./images/minus-sign.svg"></HabitLogo>
                  </ControlButton>
                </Control>
              </Habit>
            </TasksList>
          </TasksColumn>
          <TasksColumn>
            <Flex>
              <ColumnTitle>Dailies</ColumnTitle>
              <TasksFilter>All</TasksFilter>
              <TasksFilter>Due</TasksFilter>
              <TasksFilter>Not Due</TasksFilter>
            </Flex>
          </TasksColumn>
          <TasksColumn>
            <Flex>
              <ColumnTitle>To Do's</ColumnTitle>
              <TasksFilter>Active</TasksFilter>
              <TasksFilter>Scheduled</TasksFilter>
              <TasksFilter>Complete</TasksFilter>
            </Flex>
          </TasksColumn>
          <TasksColumn>
            <Flex>
              <ColumnTitle>Rewards</ColumnTitle>
              <TasksFilter>All</TasksFilter>
              <TasksFilter>Custom</TasksFilter>
              <TasksFilter>Wishlist</TasksFilter>
            </Flex>
          </TasksColumn>
        </Flex>
        
      </TasksContainer>
    </StyledUserTasks>
  );
}