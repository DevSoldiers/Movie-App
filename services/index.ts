import axios from "axios";
export const httpClient = axios.create({
  baseURL: "https://nationallottery-2089.onrender.com/api",
});
