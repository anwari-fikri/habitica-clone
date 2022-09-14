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
  border-radius: 3px;
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

export const Habit = styled.div`
  display: flex;
  margin: 0 0 3px 0;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
`

export const LeftControl = styled.div`
  background: #24CC8F;
  padding: 20px 8px;
`

export const LeftControlButton = styled.button`
  background: #1A181D40;
  cursor: pointer;
  border-radius: 50%;
  width: 28px;
  height: 28px;
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
  font-family: 'Roboto-condensed', sans-serif;
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