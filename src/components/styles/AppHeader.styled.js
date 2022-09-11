import styled from "styled-components";

export const StyledAppHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.appheader};
  padding: 9px 0 8px 24px;
  display: flex;
`

export const MemberDetails = styled.div`
  height: 167px;
  display: flex;
`

export const Avatar = styled.img`
  width: 141px;
  height: 147px;
`

export const MemberStats = styled.div`
  padding: 0 24px 0 12px;
`

export const ProfileContainer = styled.div`
  margin: 0 0 7px;
  display: flex;
`

export const ClassIconContainer = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: #FFFFFF;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClassIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const ClassInfo = styled.div`
  margin: 0 0 0 12px;
`

export const CharacterName = styled.header`
  color: #FFFFFF;
  font-size: 14px;
  margin: 0 0 4px;
  font-weight: bold;
`

export const CharacterLevel = styled.div`
  color: #D5C8FF;
  font-size: 12px;
  margin: 0 0 6px;
`


export const ProgressContainer = styled.div`
  margin: 0 0 7px 4px;
  display: flex;
  align-items: center;
`

export const StatsIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const Progress = styled.div`
  width: 200px;
  height: 12px;
  margin: 0 0 0 8px;
`

export const ProgressText = styled.span`
  color: #D5C8FF;
  font-size: 12px;
  margin: 0 0 0 8px;
`

export const PartyContainer = styled.div`
  margin: 0 24px 0 0;
  flex: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PartyTextContainer = styled.div`
  width: 300px;
  color: #FFFFFF;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 0 10px;
`

export const InviteButton = styled.button`
  color: #FFFFFF;
  font-size: 14px;
  background: #4F2A93;
  margin: 16px 0 0;
  padding: 10px 12px;
  font-weight: bold;
`

export const PartyTextHeader = styled.h3`
  font-size: 14px;
`

export const PartyTextContent = styled.span`
  font-size: 12px;
  color: #D5C8FF;
  line-height: 1.6em;
`