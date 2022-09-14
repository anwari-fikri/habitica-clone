import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`