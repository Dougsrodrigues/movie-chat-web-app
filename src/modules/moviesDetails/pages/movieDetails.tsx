"use client"
import { IMovieDetailsPage } from '@/app/(movies)/comments/[id]/page'
import { Container, Flex, HStack, Heading } from '@chakra-ui/react'
import { MovieDescription, MoviePhoto } from "../components"
import { MovieComments } from "../components/movieComments"
import { useAddCommentToMovie, useGetMoviesById } from "../hooks"

export const MovieDetails = ({ params: { id } }: IMovieDetailsPage) => {
  const { isLoading, movie } = useGetMoviesById(id)

  const { handleAddComment, handleOnChangeValueInputComment } = useAddCommentToMovie()

  return (
    <Flex
      direction='column'
    >
      <Flex
        w='100vw'
        background='facebook.500'
        justify='center'
        align='center'
      >
        <Flex
          w='100%'
          maxWidth='1480px'
          justify='center'
          align='center'
        >
          <Heading
            color='white'
          >
            About
          </Heading>
        </Flex>
      </Flex>

      <Container
        mt={8}
      >
        <HStack
          align='start'
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
        </HStack>
      </Container>

      <MovieComments
        comments={movie.comments}
        handleAddComment={handleAddComment}
        handleOnChangeValueInputComment={handleOnChangeValueInputComment}
        movieId={id}
        isLoading={isLoading}
      />
    </Flex>

  )
}