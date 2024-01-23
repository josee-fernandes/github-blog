import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme.profile};
  margin: -5.5rem auto 0;
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.2);

  img {
    border-radius: 8px;
    max-width: 9.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.6;
      border-radius: 8px;

      span {
        margin-right: 0.5rem;
      }
    }
  }
`

export const UserBio = styled.p`
  margin-top: 0.5rem;
  line-height: 1.6;
`

export const UserBadges = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
      color: ${(props) => props.theme.label};
    }

    span {
      color: ${(props) => props.theme.subtitle};
    }
  }
`
