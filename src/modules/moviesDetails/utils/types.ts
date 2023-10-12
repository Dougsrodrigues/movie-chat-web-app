import { IMovies } from "@/modules/movies/utils"

export interface IMoviesComments extends IMovies {
  comments: IComment[]
}

export type IComment = {
  movie_id: string
  comment: string
}
