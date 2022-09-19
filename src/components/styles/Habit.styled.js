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
  justify-content: space-between;
`

export const HabitHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
  padding-bottom: 7px;
`

export const HabitStreak = styled.span`
  color: #A5A1AC;
  font-size: 12px;
  padding: 0 5px;
`

export const Control = styled.div`
  border-radius: ${props => props.left ? '5px 0 0 5px' : '0 5px 5px 0'};
  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
  background: ${(props) => {
    switch(props.strength) {
      case 'superstrong':
        return '#50B5E9'
      case 'verystrong':
        return '#3BCAD7'
      case 'strong':
        return '#24CC8F'
      case 'neutral':
        return '#FFBE5D'
      case 'weak':
        return '#FF944C'
      default:
        return '#FF6165'
    }}}
`

export const ControlButton = styled.button`
  border-radius: 50%;
  background: #1A181D40;
  cursor: pointer;
  width: 28px;
  height: 28px;

  &:hover {
    background: #1A181D80;
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