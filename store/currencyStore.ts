import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { currenciesList as CurrenciesListType } from "@/types/currency";
import { currenciesService } from "@/services/currencyService";

interface CurrencyStore {
  data: CurrenciesListType[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      data: null,
      loading: false,
      error: null,
      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          set({ data: [], loading: false });
          // console.log("as");
        } catch (err: any) {
          set({
            loading: false,
            error: err.message || "Failed to fetch currencies",
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

export default useCurrencyStore;
export const setupAutoRefetch = () => {
  const store = useCurrencyStore.getState();

  store.fetchData();

  const intervalId = setInterval(() => {
    store.fetchData();
  }, 200);

  return () => clearInterval(intervalId);
};
