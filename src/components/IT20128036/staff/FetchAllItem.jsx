import axios from "axios";
//based url
export const BASED_URL = "http://localhost:5000";

//retrive all items
export const AllItems = () => {
  return axios
    .get(`${BASED_URL}/items/getAll`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
