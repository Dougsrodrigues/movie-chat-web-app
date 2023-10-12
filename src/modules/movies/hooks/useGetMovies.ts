import { useToast } from "@chakra-ui/react"
import { createColumnHelper } from "@tanstack/react-table"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { moviesServices } from "../services/moviesServices"
import { IMovies } from "../utils"

export const useGetMovies = () => {
  const pageRef = useRef(1)

  const [data, setData] = useState({
    movies: [] as IMovies[],
    isLoading: true,
    isError: false,
  })
  const toast = useToast()

  const columnHelper = createColumnHelper<IMovies>()

  const columns = useMemo(() => [
    columnHelper.accessor('id', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Id',

    }),
    columnHelper.accessor('title', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Title',
    }),
    columnHelper.accessor('year', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Year',
    }),
    columnHelper.accessor('runtime', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Runtime',
    }),
    columnHelper.accessor('revenue', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Revenue',
    }),
    columnHelper.accessor('rating', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Rating',
    }),
    columnHelper.accessor('genre', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      header: 'Genre',
    }),
  ], [])

  const movies = useMemo(() => data.movies, [data.movies])

  const getMovies = useCallback(async (page = 1) => {
    setData(prevState => ({
      ...prevState, isError: false, isLoading: true
    }))

    try {
      const movies = await moviesServices.getMovies(page)
      setData({
        isError: false,
        isLoading: false,
        movies,
      })

    } catch (error) {
      toast({
        title: 'Ops!',
        description: "An unexpected error occurred, please try again later.",
        duration: 3000,
        isClosable: true,
        status: 'error'
      })
      setData(prevState => ({
        ...prevState, isError: true, isLoading: false
      }))
    }
  }, [])

  const handleNextPage = useCallback(() => {
    pageRef.current = pageRef.current + 1

    getMovies(pageRef.current)
  }, [getMovies])

  const handlePreviousPage = useCallback(() => {
    if (pageRef.current === 1) return

    pageRef.current = pageRef.current - 1

    getMovies(pageRef.current)
  }, [getMovies])

  useEffect(() => {
    getMovies()
  }, [])

  return {
    movies: movies,
    isError: data.isError,
    isLoading: data.isLoading,
    columns,
    handleNextPage,
    handlePreviousPage
  }
}