import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { PostInfo } from './components/PostInfo'

import { PostContainer, PostContentContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { PostType } from '../Home'

export function Post() {
  const params = useParams()

  const [post, setPost] = useState<PostType | null>(null)

  async function fetchPost() {
    const response = await api.get(
      `/repos/josee-fernandes/github-blog/issues/${params.postNumber}`,
    )

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo post={post} />
      <PostContentContainer>
        <Markdown
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  ref={null}
                  PreTag="div"
                  language={match[1]}
                  style={dark}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...rest}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post?.body}
        </Markdown>
      </PostContentContainer>
    </PostContainer>
  )
}
