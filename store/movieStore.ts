import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moviesService } from "@/services/moviesService";
import { movie } from "@/types/movieType";

interface MoviesStore {
  data: movie[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useMoviesStore = create<MoviesStore>()(
  persist(
    (set) => ({
      data: [],
      loading: false,
      error: null,
      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          const movies = await moviesService.getMovies();
          set({ data: movies, loading: false });
        } catch (err: any) {
          set({
            loading: false,
            error: err.message || "Failed to fetch movies",
          });
        }
      },
    }),
    {
      name: "currency-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useMoviesStore;
