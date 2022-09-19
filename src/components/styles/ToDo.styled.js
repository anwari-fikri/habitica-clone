import styled from "styled-components"
import { 
  StyledHabit,
  HabitInfo, 
  HabitName } from "./Habit.styled"

export const StyledToDo = styled(StyledHabit)`
  
`

export const ToDoInfo = styled(HabitInfo)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const ToDoName = styled(HabitName)`

`

export const Control = styled.div`
  border-radius: 5px 0 0 5px;
  background: #FFBE5D;
  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`

export const ControlImage = styled.img`
  display: none;
  width: 16px;
  height: 16px;
`

export const ControlButton = styled.button`
  border-radius: 3px;
  background: #FFFFFF80;
  cursor: pointer;
  width: 28px;
  height: 28px;

  &:hover {
    background: #FFFFFFB0;
  }

  &:hover ${ControlImage} {
    display: inline;
  }
`

export const DeleteImage = styled.img`
  width: 16px;
  height: 16px;
`

export const DeleteButton = styled.button`
  background: #FFFFFF;
  padding: 8px 8px;
  border-radius: 50%;

  &:hover {
    background: #EEEEEE;
  }
`