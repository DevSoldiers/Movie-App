import { httpClient } from ".";

export const moviesService = {
  async getMovies() {
    const movies = await httpClient.get("");
    return movies.data;
  },
};
