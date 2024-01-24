import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostContentContainer = styled.main`
  max-width: 55rem;
  padding: 2.5rem 2rem;
  margin: 0 auto;

  p {
    line-height: 1.6;
  }

  strong {
    font-weight: 700;
    line-height: 1.6;
  }

  a {
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.25rem;
    line-height: 1.6;
  }

  li {
    padding-right: 1rem;
    margin-left: 1rem;
  }

  img {
    width: 100%;
    border-radius: 6px;
  }
`
