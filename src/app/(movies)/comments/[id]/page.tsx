import { MovieDetails } from "@/modules/moviesDetails/pages/movieDetails"

export interface IMovieDetailsPage {
  params: {
    id: number
  }
}
export default function MovieDetailsPage({ params }: IMovieDetailsPage) {
  return <MovieDetails params={params} />
}