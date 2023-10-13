import { Content } from "@/modules/common/components"
import { Flex, Heading } from "@chakra-ui/react"

export const MovierHeaderDetails = () => {
  return <Flex
    w='100vw'
    background='facebook.500'
    justify='center'
    align='center'
  >
    <Content>
      <Heading
        color='white'
      >
        About
      </Heading>
    </Content>
  </Flex>
}