import { Link } from 'react-router-dom'

import { PostBadges, PostInfoContainer, PostInfoContent } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../../../assets/icons/Github'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoContent>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>
          <Link
            to="https://github.com/josee-fernandes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </nav>
        <h1>JavaScript data types and data structures</h1>
        <PostBadges>
          <div>
            <Github />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </PostBadges>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
