//for registration
import axios from "axios";

export const userRegister = (newUser) => {
  return axios
    .post("http://localhost:5000/supplier/registration", {
      name: newUser.name,
      email: newUser.email,
      mobile: newUser.mobile,
      address: newUser.address,
      image: newUser.image,
      location: newUser.location,
      supplierItems: newUser.supplierItems,
      type: newUser.type,
      password: newUser.password,
    })
    .then((res) => {
      if (res.data.success) {
        // window.alert('Registered successfully!');
      }
    })
    .catch((err) => {
      return err;
    });
};
