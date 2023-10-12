
import { api } from "@/modules/common/infra/api/"
import { IMovies } from "../utils"

const getMovies = async (page = 1): Promise<IMovies[]> => {
  const { data } = await api.get(`/movies?_page=${page}&_limit=10`)
  return data
}

const getMoviesById = async (id: number): Promise<IMovies> => {
  const { data } = await api.get(`/movies/${id}`)
  return data
}

export const moviesServices = {
  getMovies, getMoviesById
}