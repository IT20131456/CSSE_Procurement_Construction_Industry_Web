import axios from "axios";
//based url
export const BASED_URL = "http://localhost:5000";

export const name = "Anga";

//retrive supplier profile details
export const specificName = () => {
  return axios
    .get(`${BASED_URL}/supplier/details/${name}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
