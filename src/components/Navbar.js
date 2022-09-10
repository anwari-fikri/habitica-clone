import { 
  StyledNavbar, 
  NavContainer, 
  LeftContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  RightContainer,
  LogoContainer,
  Icon,
  IconContainer,
  Span}
   from "./styles/Navbar.styled";

export default function Navbar() {
  return(
    <StyledNavbar>
      <NavContainer>
        <LeftContainer>
          <LogoContainer>
            <div style={{padding: '0 0 0 10px'}}>
              <Logo src='./images/logo.svg' alt=''></Logo>
            </div>
          </LogoContainer>
          
          <NavbarLinkContainer>
            <NavbarLink>Tasks</NavbarLink>
            <NavbarLink>Inventory</NavbarLink>
            <NavbarLink>Shops</NavbarLink>
            <NavbarLink>Party</NavbarLink>
            <NavbarLink>Guilds</NavbarLink>
            <NavbarLink>Group</NavbarLink>
            <NavbarLink>Challenges</NavbarLink>
            <NavbarLink>Help</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <IconContainer>
            <Icon src='./images/gem.svg' alt=''></Icon>
            <Span>3</Span>
          </IconContainer>
          <IconContainer style={{margin: '0 24px 0 0'}}>
            <Icon src='./images/gold.svg' alt=''></Icon>
            <Span>452.89</Span>
          </IconContainer>
          <IconContainer>
            <Icon src='./images/sync.svg' alt=''></Icon>
          </IconContainer>
          <IconContainer>
            <Icon src='./images/notification.svg' alt=''></Icon>
          </IconContainer>
          <IconContainer>
            <Icon src='./images/user.svg' alt=''></Icon>
          </IconContainer>
        </RightContainer>
      </NavContainer>
    </StyledNavbar>
  );
}