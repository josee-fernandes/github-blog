import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostType } from '../../../Home'

import { PostBadges, PostInfoContainer, PostInfoContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../../../assets/icons/Github'

interface PostInfoProps {
  post: PostType | null
}

export function PostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoContent>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>
          <Link
            to={post?.html_url || ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </nav>
        <h1>{post?.title}</h1>
        <PostBadges>
          <div>
            <Github />
            <span>{post?.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {post &&
                formatDistanceToNow(post.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post?.comments} comentários</span>
          </div>
        </PostBadges>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
