import { Box, Skeleton, Text } from "@chakra-ui/react"

interface IMovieDescriptionProps {
  title: string
  director: string
  description: string
  isLoading: boolean
}
export const MovieDescription = ({
  title,
  director,
  description,
  isLoading
}: IMovieDescriptionProps) => {
  return <Box
    w='50%'
    alignItems='flex-start'
    justifyContent='flex-start'

  >


    <Skeleton
      isLoaded={!isLoading}
    >
      <Text
        as='b'
        fontSize='lg'
      >
        {title}
      </Text>
    </Skeleton>

    <Skeleton
      isLoaded={!isLoading}
    >
      {' '}Directed by{' '}
      <Text
        as='b'
        fontSize='lg'
      >
        {director}
      </Text>
    </Skeleton>


    <Skeleton
      isLoaded={!isLoading}
    >
      <Text
        mt={8}
      >
        Description : {description}
      </Text>
    </Skeleton>
  </Box>
}