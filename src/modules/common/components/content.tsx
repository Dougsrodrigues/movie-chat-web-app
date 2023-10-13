import { Flex, FlexProps } from "@chakra-ui/react"

interface IContentProps extends FlexProps {
  children: React.ReactNode
}
export const Content = ({ children, ...props }: IContentProps) => {
  return <Flex
    w='100%'
    maxWidth='1480px'
    justify='center'
    align='center'
    direction="column"
    {...props}
  >
    {children}
  </Flex>
}