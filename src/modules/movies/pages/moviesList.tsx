"use client"
import { Content } from "@/modules/common/components"
import { DataTable } from "@/modules/common/components/table"
import { Text } from "@chakra-ui/react"
import { useGetMovies } from "../hooks"

export const MoviesListPage = () => {
  const {
    movies,
    isError,
    isLoading,
    columns,
    handleNextPage,
    handlePreviousPage
  } = useGetMovies()

  if (isError) {
    return <Text>Error</Text>
  }
  return <Content>
    <DataTable
      isLoading={isLoading}
      data={movies}
      columns={columns}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />
  </Content >

}