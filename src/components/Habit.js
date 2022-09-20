import { 
  StyledHabit, 
  HabitLogo, 
  HabitInfo, 
  HabitHeaderContainer,
  HabitName, 
  HabitStreakContainer, 
  HabitStreak,
  Control,
  ControlButton,
  DeleteButton,
  DeleteImage } from "./styles/Habit.styled";

export default function Habit({ habit, habits, setHabits, text }) {
  let plusAudio = new Audio("./sound/complete.mp3");
  plusAudio.volume = 0.2;
  let minusAudio = new Audio("./sound/fail.mp3");
  minusAudio.volume = 0.2;

  function strengthHandler(plusCounter, minusCounter) {
    const difference = plusCounter - minusCounter;
    console.log(difference)
    if (difference > 11) {
      return "superstrong";
    } else if (difference > 5) {
      return "verystrong";
    } else if (difference > 0) {
      return "strong";  
    } else if (difference === 0) {
      return "neutral";
    } else if (difference > -9) {
      return "weak";
    } else {
      return "veryweak";
    }
  }

  const plusCounterHandler = () => {
    setHabits(habits.map(item => {
      if(item.id === habit.id) {
        return {
          ...item, 
          strength: strengthHandler(item.plusCounter+1, item.minusCounter),
          plusCounter: item.plusCounter+1,
        }
      }
      return item;
    }))
    plusAudio.play();
  }

  const minusCounterHandler = () => {
    setHabits(habits.map(item => {
      if(item.id === habit.id) {
        return {
          ...item, 
          strength: strengthHandler(item.plusCounter, item.minusCounter+1),
          minusCounter: item.minusCounter+1
        }
      }
      return item;
    }))
    minusAudio.play();
  }

  const deleteHandler = () => {
    text = "Are you sure you want to delete To Do?";
    if (window.confirm(text) === true) {
      setHabits(habits.filter(el => el.id !== habit.id));
    }
  };

  return(
    <StyledHabit>
      <Control left={true} strength={habit.strength}>
          <ControlButton onClick={plusCounterHandler}>
            <HabitLogo src="./images/plus-sign.svg"></HabitLogo>
          </ControlButton>
      </Control>
      <HabitInfo>
        <HabitHeaderContainer>
          <HabitName>{text}</HabitName>
          <DeleteButton onClick={deleteHandler}>
            <DeleteImage src="./images/trash.svg"></DeleteImage>
          </DeleteButton>
        </HabitHeaderContainer>
        <HabitStreakContainer>
          <HabitLogo src="./images/fast-forward.svg"></HabitLogo>
          <HabitStreak>+{habit.plusCounter} | -{habit.minusCounter}</HabitStreak>
          <HabitLogo src="./images/habit-tags.svg"></HabitLogo>
        </HabitStreakContainer>
      </HabitInfo>
      <Control strength={habit.strength}>
        <ControlButton onClick={minusCounterHandler}>
          <HabitLogo src="./images/minus-sign.svg"></HabitLogo>
        </ControlButton>
      </Control>
    </StyledHabit>
  );
}