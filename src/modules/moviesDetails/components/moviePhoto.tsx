import { Box, Image, Skeleton } from "@chakra-ui/react"

interface MoviePhotoProps {
  title: string
  isLoading: boolean
}
export const MoviePhoto = ({ title, isLoading }: MoviePhotoProps) => {
  return (
    <Skeleton
      isLoaded={!isLoading}
      w='50%'
    >
      <Box
        border='1px solid black'
        height={300}
      >
        <Image src="" width={100} height={100} alt={`${title} photo`} />
      </Box>
    </Skeleton>
  )
}