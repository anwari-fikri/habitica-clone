import styled from "styled-components";

export const StyledHabit = styled.div`
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
  padding: 5px 5px 0 0;
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

export const Control = styled.div`
  border-radius: ${props => props.left ? '5px 0 0 5px' : '0 5px 5px 0'};
  background: #24CC8F;
  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`

export const ControlButton = styled.button`
  border-radius: 50%;
  background: #1A181D40;
  cursor: pointer;
  width: 28px;
  height: 28px;
`