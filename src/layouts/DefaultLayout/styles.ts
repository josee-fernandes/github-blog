import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div``

interface HeaderContainerProps {
  $coverUrl: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 18.5rem;
  background: ${(props) => css`url(${props.$coverUrl})`} center center/100% 100%
    no-repeat ${(props) => props.theme.profile};
  display: flex;
  justify-content: center;

  & > img {
    margin-top: -4rem;
    max-width: 9.25rem;
  }
`
