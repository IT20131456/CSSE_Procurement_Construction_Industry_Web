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

//retrive supplier profile details
export const supplierProfile = (id) => {
  return axios
    .get(`${BASED_URL}/supplier/details/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

// retrive specific profile
export const specificProfile = (id) => {
  return axios
    .get(`${BASED_URL}/supplier/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

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

//update supplier details
export const supplierUpdate = (id, data) => {
  return axios
    .put(`${BASED_URL}/update/supplier/details/${id}`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
