//for registration
import axios from "axios";
import {USER_REGISTRATION} from '../../constants/RestApi.const'

export const userRegister = (newUser) => {
  return axios
    .post(USER_REGISTRATION, {
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
      }
    })
    .catch((err) => {
      return err;
    });
};
