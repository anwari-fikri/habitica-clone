import styled from "styled-components";

export const StyledNavbar = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 8px 16px;
`

export const LeftContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
`

export const RightContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavContainer = styled.nav`
  display: flex;
  background-color: white;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled.div`
  color: #FFFFFF;
  padding: 12.8px 16px;
  font-weight: bold;
`

export const Logo = styled.img`
  width: 118px;
  height: 25.81px;
`

export const LogoContainer = styled.div`
  margin: 0 16px 0 0;
  padding: 5px 0;
  display: flex;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const IconContainer = styled.div`
  display: flex;
  padding: 0 12px;
`

export const Span = styled.span`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 0 0 10px;
`
