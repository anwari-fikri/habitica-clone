import { 
  StyledReward, 
  ItemImage, 
  ItemPriceContainer, 
  ItemPriceLogo, 
  ItemPrice } from "./styles/Reward.styled";

export default function Reward() {
  return(
    <StyledReward>
      <ItemImage></ItemImage>
      <ItemPriceContainer>
        <ItemPriceLogo src="./images/gold.svg"></ItemPriceLogo>
        <ItemPrice>25</ItemPrice>
      </ItemPriceContainer>
    </StyledReward>
  );
}
