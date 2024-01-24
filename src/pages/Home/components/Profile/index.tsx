import { ProfileContainer, ProfileContent, UserBadges, UserBio } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../../../assets/icons/Github'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { user } from '../../../../utils/example'

// https://api.github.com/users/josee-fernandes

const name = 'josee-fernandes'

type UserType = typeof user

export function Profile() {
  const [user, setUser] = useState<UserType | null>(null)

  async function fetchUser() {
    const response = await api.get(`/users/${name}`)

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={user?.avatar_url} alt="" />
        <div>
          <header>
            <h1>{user?.name}</h1>
            <Link
              to={user?.html_url || ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </header>
          <UserBio>{user?.bio}</UserBio>
          <UserBadges>
            <div>
              <Github />
              <span>{user?.login}</span>
            </div>
            {user?.company !== null && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user?.company}</span>
              </div>
            )}
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user?.followers} seguidores</span>
            </div>
          </UserBadges>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
