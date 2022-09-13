import styled from "styled-components";

export const StyledUserTasks = styled.div`
  margin: 0 12px;
  padding: 16px 12px 0;
`

export const TasksNavigation = styled.header`
  margin: 0 12px 20px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchBar = styled.input`
  background: #FFFFFF;
  padding: 4px 16px 4px 12px;
  border-radius: 3px;
  border: solid;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 2px;
  dangerouslySetInnerHTML: createMarkup();
  width: 315.11px;
  height: 32px;
  font-size: 14px;
`

export const TagsDropdown = styled.button`
  background: #FFFFFF;
  margin: 0 0 0 8px;
  padding: 3.504px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
`

export const TagsLogo = styled.img`
  width: 16px;
  height: 16px;
`

export const TagsSpan = styled.span`
  color: #4E4A57;
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`