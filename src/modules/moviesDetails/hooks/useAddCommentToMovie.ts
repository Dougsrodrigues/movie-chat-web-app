import { db } from "@/modules/common/infra/firebase/config"
import { useToast } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { ChangeEvent, useCallback, useRef } from "react"

export const useAddCommentToMovie = () => {
  const toast = useToast()
  const commentValueRef = useRef('')
  const handleAddComment = useCallback((movieId: number | string) => {
    const moviesCommentsRef = collection(db, 'movies-comments')

    addDoc(moviesCommentsRef, {
      movie_id: String(movieId),
      comment: commentValueRef.current
    }).then(() => {
      toast({
        title: 'Success!',
        description: "Comment added",
        duration: 3000,
        isClosable: true,
        status: 'success'
      })
    }).catch(_ => {
      toast({
        title: 'Ops!',
        description: "An unexpected error occurred, please try again later.",
        duration: 3000,
        isClosable: true,
        status: 'error'
      })
    })
  }, [toast])

  const handleOnChangeValueInputComment = (event: ChangeEvent<HTMLInputElement>) => {
    commentValueRef.current = event.target.value
  }

  return { handleAddComment, handleOnChangeValueInputComment }
}