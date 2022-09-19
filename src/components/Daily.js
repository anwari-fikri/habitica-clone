import { 
  StyledDaily, 
  DailyInfo, 
  DailyHeaderContainer,
  DailyName, 
  DailyStreakContainer, 
  DailyLogo, 
  DailyStreak,
  Control,
  ControlButton,
  ControlImage,
  DeleteButton,
  DeleteImage} from "./styles/Daily.styled";

export default function Daily({ dail, daily, setDaily, text }) {
  let audio = new Audio("./sound/complete.mp3");
  audio.volume = 0.2;

  const completeHandler = () => {
    setDaily(daily.map(item => {
      if(item.id === dail.id) {
        return {
          ...item, 
          completed: !item.completed, 
          counter: (item.completed) ? item.counter-1 : item.counter+1
        }
      }
      return item;
    }))
    audio.play();
  };

  const deleteHandler = () => {
    text = "Are you sure you want to delete To Do?";
    if (window.confirm(text) === true) {
      setDaily(daily.filter(el => el.id !== dail.id));
    }
  };

  return(
    <StyledDaily>
      <Control complete={dail.completed}>
        <ControlButton onClick={completeHandler}>
          <ControlImage 
            complete={dail.completed}
            src="./images/tick.svg"
          />
        </ControlButton>
      </Control>
      <DailyInfo>
        <DailyHeaderContainer>
          <DailyName complete={dail.completed}>{text}</DailyName>
          <DeleteButton onClick={deleteHandler}>
            <DeleteImage src="./images/trash.svg"></DeleteImage>
          </DeleteButton>
        </DailyHeaderContainer>
        <DailyStreakContainer>
          <DailyLogo src="./images/fast-forward.svg"></DailyLogo>
          <DailyStreak>{dail.counter}</DailyStreak>
        </DailyStreakContainer>
      </DailyInfo>
    </StyledDaily>
  );
}