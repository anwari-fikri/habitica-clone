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
  TasksFilterContainer,
  Daily,
  DailyName,
  DailyInfo,
  DailyStreakContainer,
  DailyLogo,
  DailyStreak,
  ToDo,
  ToDoInfo,
  ToDoName,
  Item,
  ItemImage,
  ItemPriceContainer,
  ItemPriceLogo,
  ItemPrice,
  ItemsContainer,} from "./styles/UserTasks.styled";

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
              <Habit>
                <Control $type="habit" left>
                    <ControlButton habit>
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
                <Control $type="habit">
                  <ControlButton habit>
                    <HabitLogo src="./images/minus-sign.svg"></HabitLogo>
                  </ControlButton>
                </Control>
              </Habit>
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
              <Daily>
                <Control $type="daily" left>
                  <ControlButton></ControlButton>
                </Control>
                <DailyInfo>
                  <DailyName>Take out trash</DailyName>
                  <DailyStreakContainer>
                    <DailyLogo src="./images/fast-forward.svg"></DailyLogo>
                    <DailyStreak>10</DailyStreak>
                  </DailyStreakContainer>
                </DailyInfo>
              </Daily>
            </TasksList>
          </TasksColumn>
          {/* To do's */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>To Do's</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter>Active</TasksFilter>
                <TasksFilter>Scheduled</TasksFilter>
                <TasksFilter>Complete</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a To Do"></QuickAdd>
              <ToDo>
                <Control $type="todo" left>
                  <ControlButton></ControlButton>
                </Control>
                <ToDoInfo>
                  <ToDoName>Send Package</ToDoName>
                </ToDoInfo>
              </ToDo>
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
                <Item>
                    <ItemImage></ItemImage>
                    <ItemPriceContainer>
                      <ItemPriceLogo src="./images/gold.svg"></ItemPriceLogo>
                      <ItemPrice>25</ItemPrice>
                    </ItemPriceContainer>
                  </Item>
                  <Item>
                    <ItemImage></ItemImage>
                    <ItemPriceContainer>
                      <ItemPriceLogo src="./images/gold.svg"></ItemPriceLogo>
                      <ItemPrice>25</ItemPrice>
                    </ItemPriceContainer>
                  </Item>
                  <Item>
                    <ItemImage></ItemImage>
                    <ItemPriceContainer>
                      <ItemPriceLogo src="./images/gold.svg"></ItemPriceLogo>
                      <ItemPrice>25</ItemPrice>
                    </ItemPriceContainer>
                  </Item>
              </ItemsContainer>
            </TasksList>
          </TasksColumn>
        </Flex>
        
      </TasksContainer>
    </StyledUserTasks>
  );
}