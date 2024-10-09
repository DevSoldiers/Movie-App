import { dateFormatter } from "@/utils/dateFormatter";
import { httpClient } from ".";

export const currenciesService = {
  async getCurrencies() {
    try {
      const currencies = (await httpClient.get("")).data;
      const currenciesArray = Object.keys(currencies).map((key) => ({
        country: key.toUpperCase(),
        currencyName: currencies[key]?.name,
        rate: currencies[key]?.rate.toFixed(4),
        lastUpdated: dateFormatter(currencies[key]?.date),
      }));
      currenciesArray.sort((a, b) => a.rate - b.rate);
      return currenciesArray;
    } catch (err: any) {
      throw new Error("Error getting currencies");
    }
  },
};
