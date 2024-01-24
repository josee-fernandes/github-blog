import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Profile } from './components/Profile'

import { FormContainer, HomeContainer } from './styles'
import { useEffect, useRef } from 'react'

const searchPostFormSchema = z.object({
  query: z.string(),
})

type SearchPostFormSchemaType = z.infer<typeof searchPostFormSchema>

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
    </HomeContainer>
  )
}
