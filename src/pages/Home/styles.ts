import styled from 'styled-components'

export const HomeContainer = styled.div``

export const FormContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: 4.5rem auto 0;

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
