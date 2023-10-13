import { Avatar, Flex, Heading, Skeleton, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { SubmitCommentButton } from "."
import { IComment } from "../utils/types"

interface IMovieCommentsProps {
  comments: IComment[]
  isLoading: boolean
  handleOnChangeValueInputComment: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddComment: (id: number | string) => void
  movieId: number | string
}
export const MovieComments = ({
  isLoading,
  comments,
  handleOnChangeValueInputComment,
  handleAddComment,
  movieId,
}: IMovieCommentsProps) => {
  return <Flex
    mt={8}
    w='100%'
    direction='column'
  >
    <Heading as='h3' size='lg'>Comments</Heading>
    <VStack
      mt={8}
      w='100%'
    >

      {isLoading ? <Flex
        w='100%'
        align='center'
        gap={4}
      >
        <Skeleton>
          <Avatar src='https://bit.ly/broken-link' />
        </Skeleton>
        <Skeleton w='50%' h={5}></Skeleton>

      </Flex> : <>{comments?.map(comment => (
        <Flex
          key={`${comment.comment}+${comment.movie_id}`}
          w='100%'
          align='center'
          gap={4}
        >
          <Avatar src='https://bit.ly/broken-link' />
          <Text>{comment.comment}</Text>
        </Flex>
      ))}</>}


      <SubmitCommentButton
        onChange={handleOnChangeValueInputComment}
        handleClickIcon={() => handleAddComment(movieId)}
        placeholder='Write a comment' />
    </VStack>
  </Flex >
}