import styled from 'styled-components'

export const HomeContainer = styled.div``

export const FormContainer = styled.div`
  max-width: 55rem;
  width: 100%;
  margin: 4.5rem auto 0;
  padding: 0 1rem;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.span};
      text-align: right;
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      width: 100%;
      background: ${(props) => props.theme.input};
      color: ${(props) => props.theme.text};
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 6px;
      padding: 0.75rem 1rem;
      transition: border-color 150ms;

      &:focus {
        border-color: ${(props) => props.theme.blue};
        box-shadow: none;
      }

      &::placeholder {
        color: ${(props) => props.theme.label};
      }
    }
  }
`

export const PostsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 55rem;
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 1rem;

  li {
    list-style-type: none;
  }

  a {
    display: block;
    text-decoration: none;
    padding: 2rem;
    border-radius: 10px;
    background: ${(props) => props.theme.post};
    color: ${(props) => props.theme.text};
    overflow: hidden;

    header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      h2 {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.6;
        color: ${(props) => props.theme.title};
      }

      span {
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${(props) => props.theme.span};
        text-align: right;
        display: block;
        width: max-content;
        white-space: nowrap;
        margin-top: 0.31rem;
      }
    }

    p {
      margin-top: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      width: 100%;
      max-height: calc(1.6 * 4);
      line-height: 1.6;

      display: block;
      line-clamp: 4;
      box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`
