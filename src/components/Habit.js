import { 
  StyledHabit, 
  HabitLogo, 
  HabitInfo, 
  HabitName, 
  HabitStreakContainer, 
  HabitStreak,
  Control,
  ControlButton } from "./styles/Habit.styled";

export default function Habit() {
  return(
    <StyledHabit>
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
    </StyledHabit>
  );
}