import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { issue } from '../../utils/example'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Profile } from './components/Profile'

import { FormContainer, HomeContainer, PostsContainer } from './styles'

const searchPostFormSchema = z.object({
  query: z.string(),
})

type SearchPostFormSchemaType = z.infer<typeof searchPostFormSchema>

export type PostType = typeof issue

export function Home() {
  const { register, handleSubmit, watch } = useForm<SearchPostFormSchemaType>({
    resolver: zodResolver(searchPostFormSchema),
    defaultValues: {
      query: '',
    },
  })
  const formRef = useRef<HTMLFormElement>(null)

  const [posts, setPosts] = useState<PostType[]>([])

  async function fetchPosts() {
    const response = await api.get('/repos/josee-fernandes/github-blog/issues')

    setPosts(response.data)
  }

  function searchPost(data: SearchPostFormSchemaType) {
    console.log(data)
  }

  const query = watch('query')

  useEffect(() => {
    handleSubmit(searchPost)()
  }, [query, handleSubmit])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <FormContainer>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>
        <form ref={formRef} onSubmit={handleSubmit(searchPost)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            required
            {...register('query')}
          />
        </form>
      </FormContainer>
      <main>
        <PostsContainer>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/${post.number}`}>
                <header>
                  <h2>{post.title}</h2>
                  <span>
                    {formatDistanceToNow(post.created_at, {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </span>
                </header>
                <p>{post.body}</p>
              </Link>
            </li>
          ))}
        </PostsContainer>
      </main>
    </HomeContainer>
  )
}
