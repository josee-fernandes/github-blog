import { Outlet } from 'react-router-dom'

import { HeaderContainer, LayoutContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import coverImg from '../../assets/cover.jpg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderContainer $coverUrl={coverImg}>
        <img src={logoImg} alt="" />
      </HeaderContainer>
      <Outlet />
    </LayoutContainer>
  )
}
