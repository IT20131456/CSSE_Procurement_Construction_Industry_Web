import axios from "axios";
//based url
export const BASED_URL = "http://localhost:5000";

export const id = "63585f6e8e26a56d3774ea1f";

//retrive supplier profile details
export const supplierProfile = () => {
  return axios
    .get(`${BASED_URL}/supplier/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
