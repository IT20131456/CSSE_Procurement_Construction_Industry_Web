import axios from "axios";
//based url
export const BASED_URL = "http://localhost:5000";

//retive supplier details
export const supplierDetails = () => {
  return axios
    .get(`${BASED_URL}/supplier/details/getAll`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
