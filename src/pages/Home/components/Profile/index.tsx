import { ProfileContainer, UserBadges, UserBio } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../../../assets/icons/Github'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/josee-fernandes.png" alt="" />
      <div>
        <header>
          <h2>Cameron Williamson</h2>
          <Link
            to="https://github.com/josee-fernandes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>
        <UserBio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </UserBio>
        <UserBadges>
          <div>
            <Github />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </UserBadges>
      </div>
    </ProfileContainer>
  )
}
