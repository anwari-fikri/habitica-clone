import { 
  StyledDaily, 
  DailyInfo, 
  DailyName, 
  DailyStreakContainer, 
  DailyLogo, 
  DailyStreak,
  Control,
  ControlButton } from "./styles/Daily.styled";

export default function Daily() {
  return(
    <StyledDaily>
      <Control>
        <ControlButton></ControlButton>
      </Control>
      <DailyInfo>
        <DailyName>Take out trash</DailyName>
        <DailyStreakContainer>
          <DailyLogo src="./images/fast-forward.svg"></DailyLogo>
          <DailyStreak>10</DailyStreak>
        </DailyStreakContainer>
      </DailyInfo>
    </StyledDaily>
  );
}