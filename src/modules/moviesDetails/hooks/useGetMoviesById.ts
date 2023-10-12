import { db } from "@/modules/common/infra/firebase/config"
import { moviesServices } from "@/modules/movies/services/moviesServices"
import { useToast } from "@chakra-ui/react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { IComment, IMoviesComments } from "../utils/types"

export const useGetMoviesById = (id: number) => {
  const [data, setData] = useState({
    movie: {} as IMoviesComments,
    isLoading: true,
    isError: false,
  })
  const toast = useToast()

  useEffect(() => {
    const getMovieById = async () => {
      setData(prevState => ({
        ...prevState, isError: false, isLoading: true
      }))
      try {
        const movie = await moviesServices.getMoviesById(id)

        const moviesCommentsRef = collection(db, 'movies-comments')
        const q = query(moviesCommentsRef, where('movie_id', '==', id))

        onSnapshot(q, (querySnapshot => {
          const comments: IComment[] = []

          querySnapshot.forEach(doc => {
            const comment = doc.data() as IComment
            comments.push(comment)
          })

          const movieWithComments: IMoviesComments = { ...movie, comments }

          setData({
            isError: false,
            isLoading: false,
            movie: movieWithComments,
          })
        }))
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
    }

    getMovieById()
  }, [id])

  return {
    movie: data.movie,
    isLoading: data.isLoading,
    isError: data.isError
  }
}