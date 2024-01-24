import { useParams } from 'react-router-dom'
import { PostContainer } from './styles'
import { PostInfo } from './components/PostInfo'

export function Post() {
  const params = useParams()

  return (
    <PostContainer>
      <PostInfo />
    </PostContainer>
  )
}
