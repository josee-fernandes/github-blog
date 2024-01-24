import styled from 'styled-components'

export const ProfileContainer = styled.header`
  max-width: 55rem;
  padding: 0 1rem;
  margin: -5.5rem auto 0;
`

export const ProfileContent = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme.profile};
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.2);

  & > div {
    width: 100%;
  }

  img {
    border-radius: 8px;
    max-width: 9.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
    }

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
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.label};
    }

    span {
      color: ${(props) => props.theme.subtitle};
    }
  }
`
