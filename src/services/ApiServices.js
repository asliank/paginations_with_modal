import Axios from "axios";

export const GET_API = async (url) => {
  return await Axios.get(url);
};
