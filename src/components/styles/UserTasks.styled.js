import styled from "styled-components";

export const StyledUserTasks = styled.div`
  margin: 0 12px;
  padding: 16px 0px 0;
`

export const TasksNavigation = styled.header`
  margin: 0 12px 20px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchBar = styled.input`
  background: #FFFFFF;
  padding: 4px 16px 4px 12px;
  border: solid;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 2px;
  dangerouslySetInnerHTML: createMarkup();
  width: 25%;
  height: 32px;
  font-size: 14px;
`

export const TagsDropdown = styled.button`
  background: #FFFFFF;
  margin: 0 0 0 8px;
  padding: 3.504px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
`

export const TagsLogo = styled.img`
  width: 16px;
  height: 16px;
`

export const TagsSpan = styled.span`
  color: #4E4A57;
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`

export const TasksContainer = styled.div`
`

export const TasksColumn = styled.div`
  padding: 0 12px;
  width: 100%;
`

export const ColumnTitle = styled.h2`
  color: #34313A;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  margin: 4px 0;
`

export const TasksFilterContainer = styled.div`
  display: flex;
`

export const TasksFilter = styled.span`
  color: #686274;
  font-size: 12px;
  padding: 8px 8px 6px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`

export const TasksList = styled.div`
  background: #EDECEE;
  padding: 8px 8px 30px;
  min-height: 1015.98px;
  border-radius: 3px;
`

export const QuickAdd = styled.textarea`
  background: #1A181D0F;
  margin: 0px 0px 3px;
  padding: 12px 16px;
  width: 100%;
  height: 46.02px;
  resize: none;
  font-weight: bold;
  overflow: hidden;
  font-size: 14px;
  border: none;
`

export const Control = styled.div`
  border-radius: ${props => props.left ? '5px 0 0 5px' : '0 5px 5px 0'};
  background: ${props => {
    switch (props.$type) {
      case 'habit':
        return '#24CC8F';
      case 'daily':
        return '#50B5E9';
      case 'todo':
        return '#FFBE5D';
      default:
        return '#EDECEE';
    }
  }};

  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`

export const ControlButton = styled.button`
  border-radius: ${props => props.habit ? '50%' : '3px'};
  background: ${props => props.habit ? '#1A181D40' : '#FFFFFF80'};
  cursor: pointer;
  width: 28px;
  height: 28px;
`

// Habits
export const Habit = styled.div`
  display: flex;
  margin: 0 0 3px 0;
`

export const HabitLogo = styled.img`
  width: 10px;
  height: 10px;
`

export const HabitInfo = styled.div`
  background: #FFFFFF;
  width: 100%;
  padding: 5px 0 0 0;
  display: flex;
  flex-direction: column;
`

export const HabitName = styled.span`
  color: #34313A;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 4px 0 10px 12px;
`

export const HabitStreakContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 4px 0 0;
  padding: 0 8px;
`

export const HabitStreak = styled.span`
  color: #A5A1AC;
  font-size: 12px;
  padding: 0 5px;
`

// Dailies
export const Daily = styled(Habit)`
  
`

export const DailyLogo = styled(HabitLogo)`

`

export const DailyInfo = styled(HabitInfo)`

`

export const DailyName = styled(HabitName)`
  
`

export const DailyStreakContainer = styled(HabitStreakContainer)`

`

export const DailyStreak = styled(HabitStreak)`

`

// To Do's
export const ToDo = styled(Habit)`
  
`

export const ToDoInfo = styled(HabitInfo)`

`

export const ToDoName = styled(HabitName)`
  
`

// Rewards
export const Item = styled.div`
  width: 94px;
  height: 120px;
  border-radius: 4px 4px 0 0;
  margin: 10px 0 0 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ItemPriceContainer = styled.div`
  width: 94px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFBE5D33;
  margin: 0 1px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`

export const ItemPrice = styled.span`
  font-size: 12px;
  color: #794B00;
  font-weight: bold;
`

export const ItemPriceLogo = styled(TagsLogo)`
  margin: 0 5px 0 0;
`

export const ItemImage = styled.div`
  width: 68px;
  height: 68px;
  background: #DDDDDD;
  margin: 12px 0;
`