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

// https://api.github.com/users/josee-fernandes

const name = 'josee-fernandes'

const user = {
  login: 'josee-fernandes',
  id: 51970876,
  node_id: 'MDQ6VXNlcjUxOTcwODc2',
  avatar_url: 'https://avatars.githubusercontent.com/u/51970876?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/josee-fernandes',
  html_url: 'https://github.com/josee-fernandes',
  followers_url: 'https://api.github.com/users/josee-fernandes/followers',
  following_url:
    'https://api.github.com/users/josee-fernandes/following{/other_user}',
  gists_url: 'https://api.github.com/users/josee-fernandes/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/josee-fernandes/starred{/owner}{/repo}',
  subscriptions_url:
    'https://api.github.com/users/josee-fernandes/subscriptions',
  organizations_url: 'https://api.github.com/users/josee-fernandes/orgs',
  repos_url: 'https://api.github.com/users/josee-fernandes/repos',
  events_url: 'https://api.github.com/users/josee-fernandes/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/josee-fernandes/received_events',
  type: 'User',
  site_admin: false,
  name: 'José Fernandes',
  company: null,
  blog: 'www.linkedin.com/in/josee-fernandes',
  location: 'São Vicente, SP',
  email: null,
  hireable: true,
  bio: 'Front-end Developer',
  twitter_username: null,
  public_repos: 64,
  public_gists: 1,
  followers: 11,
  following: 10,
  created_at: '2019-06-18T19:23:48Z',
  updated_at: '2024-01-20T02:13:02Z',
}

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
