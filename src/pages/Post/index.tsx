import { useParams } from 'react-router-dom'
import { PostContainer } from './styles'

export function Post() {
  const params = useParams()

  return <PostContainer>{params.postId}</PostContainer>
}
