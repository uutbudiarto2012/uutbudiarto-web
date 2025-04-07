import axios from "axios";
export const axiosClient = axios.create({
  baseURL: `${process.env.BASE_URL}/wp-json/wp/v2`,
});