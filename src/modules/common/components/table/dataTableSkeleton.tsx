import { Flex, HStack, Skeleton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

const repeats = [1, 2, 3, 4, 5]
export const DataTableSkeleton = () => {
  return <Flex
    direction='column'
    w='100%'
  >
    <HStack
      my={8}
    >
      <Skeleton w={['100%', '100%', '50%']} height='70px' />
    </HStack>


    <TableContainer>
      <Table
        variant='striped'
      >
        <Thead>
          <Tr>
            {repeats.map(rep => <Th
              key={'head' + rep}
            >
              <Skeleton
                height='30px'
              />
            </Th>)}
          </Tr>
        </Thead>


        <Tbody>
          {repeats.map(rep => <Tr
            key={'row' + rep}
          >
            {repeats.map(rep => <Td
              key={'cell' + rep}>
              <Skeleton height='70px' />
            </Td>)}


          </Tr>)}

        </Tbody>
      </Table>
    </TableContainer>
  </Flex>
}