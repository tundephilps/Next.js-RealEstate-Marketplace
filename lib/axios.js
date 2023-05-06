import Axios from "axios";

const headers = {
  "X-RapidAPI-Key": "c898200877mshbbafbcf0a26a170p1244c1jsnd4dfaccd48bb",
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

export const axios = Axios.create({
  baseURL: "https://bayut.p.rapidapi.com",
  headers: headers,
});
