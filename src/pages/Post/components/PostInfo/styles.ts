import styled from 'styled-components'

export const PostInfoContainer = styled.header`
  max-width: 55rem;
  padding: 0 1rem;
  margin: -5.5rem auto 0;
`

export const PostInfoContent = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  gap: 2rem;
  background: ${(props) => props.theme.profile};
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      border-radius: 6px;
      line-height: 1.6;
      font-weight: 700;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 1.25rem;
  }
`

export const PostBadges = styled.div`
  margin-top: 0.5rem;
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
      color: ${(props) => props.theme.span};
    }
  }
`
