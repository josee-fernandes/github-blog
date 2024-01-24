import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Profile } from './components/Profile'

import { FormContainer, HomeContainer, PostsContainer } from './styles'
import { useEffect, useRef } from 'react'

const searchPostFormSchema = z.object({
  query: z.string(),
})

type SearchPostFormSchemaType = z.infer<typeof searchPostFormSchema>

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    createdAt: new Date().toISOString(),
  },
]

export function Home() {
  const { register, handleSubmit, watch } = useForm<SearchPostFormSchemaType>({
    resolver: zodResolver(searchPostFormSchema),
    defaultValues: {
      query: '',
    },
  })
  const formRef = useRef<HTMLFormElement>(null)

  function searchPost(data: SearchPostFormSchemaType) {
    console.log(data)
  }

  const query = watch('query')

  useEffect(() => {
    handleSubmit(searchPost)()
  }, [query, handleSubmit])

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
      <PostsContainer>
        {posts.map((post) => (
          <li key={post.id}>
            <header>
              <h2>{post.title}</h2>
              <span>{post.createdAt}</span>
            </header>
            <p>{post.content}</p>
          </li>
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}
