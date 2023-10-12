import { Button, HStack, Tfoot } from "@chakra-ui/react"
import { IDataTableProps } from "."

type IPaginationProps = Pick<IDataTableProps<object>, "handleNextPage" | "handlePreviousPage">

export const Pagination = ({ handlePreviousPage, handleNextPage }: IPaginationProps) => {
  return <Tfoot>
    <HStack mt={4}>
      <Button
        onClick={handlePreviousPage}
      >
        Previous Page
      </Button>
      <Button
        onClick={handleNextPage}
      >
        Next Page
      </Button>
    </HStack>
  </Tfoot>
}