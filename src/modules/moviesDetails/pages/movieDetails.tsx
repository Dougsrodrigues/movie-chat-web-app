"use client"
import { IMovieDetailsPage } from '@/app/(movies)/comments/[id]/page'
import { Content } from '@/modules/common/components'
import { Flex } from '@chakra-ui/react'
import { MovieDescription, MoviePhoto, MovierHeaderDetails } from "../components"
import { MovieComments } from '../components/movieComments'
import { useAddCommentToMovie, useGetMoviesById } from "../hooks"

export const MovieDetails = ({ params: { id } }: IMovieDetailsPage) => {
  const { isLoading, movie } = useGetMoviesById(id)

  const { handleAddComment, handleOnChangeValueInputComment } = useAddCommentToMovie()

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <MovierHeaderDetails />

      <Content
        p={8}
        mt={4}
        alignItems='center'
        justifyContent='center'
        direction='column'
      >
        <Flex
          w='100%'
          gap={8}
          direction={['column', 'column', 'row']}
          alignItems='center'
          justifyContent='center'
        >
          <MoviePhoto
            title={movie.title}
            isLoading={isLoading}
          />

          <MovieDescription
            title={movie.title}
            isLoading={isLoading}
            description={movie.description}
            director={movie.director}
          />
        </Flex>
        <Flex
          w='100%'>
          <MovieComments
            comments={movie.comments}
            handleAddComment={handleAddComment}
            handleOnChangeValueInputComment={handleOnChangeValueInputComment}
            movieId={id}
            isLoading={isLoading}
          />
        </Flex>
      </Content>

    </Flex>

  )
}