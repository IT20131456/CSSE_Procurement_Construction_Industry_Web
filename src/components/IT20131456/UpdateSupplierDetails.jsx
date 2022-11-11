/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import NavBar from "../IT20128036/supplier/NavBar";
import {SUPPLIER_PATH,UPDATE_SUPPLIER_DETAILS_PATH} from '../constants/RestApi.const'

export default function SupplierDetails() {
  const { id } = useParams();
  const [supplierName, setSupplierName] = useState("");
  const [supplierPno, setSupplierPno] = useState("");
  const [supplierEmail, setSupplierEmail] = useState("");
  const [supplierLocation, setSupplierLocation] = useState("");
  const [supplierImage, setSupplierImage] = useState("");
  const [supplierItems, setSupplierItems] = useState();
  const [fromValidate, setFromValidate] = useState("");
  const [validateAlert, setValidateAlert] = useState(false);
  const [validateAlertSuccess, setValidateAlertSuccess] = useState(false);

    //access backend data using axios
  useEffect(() => {
    axios.get(SUPPLIER_PATH +`${id}`).then((response) => {
      console.log(response.data.exsitingSupplierDetails);
      setSupplierName(response.data.exsitingSupplierDetails.name);
      setSupplierPno(response.data.exsitingSupplierDetails.mobile);
      setSupplierEmail(response.data.exsitingSupplierDetails.email);
      setSupplierLocation(response.data.exsitingSupplierDetails.location);
      setSupplierImage(response.data.exsitingSupplierDetails.image);
      setSupplierItems(response.data.exsitingSupplierDetails.supplierItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
//form validatios with phoone number nad email
    if (!supplierPno.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      setValidateAlert(true);
      setFromValidate("Please Input Valid Phone Number");
    } else if (
      !supplierEmail.match(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      setValidateAlert(true);
      setFromValidate("Please Input Valid Email");
    } else {
      setValidateAlertSuccess(true);

      const data = {
        mobile: supplierPno,
        email: supplierEmail,
        location: supplierLocation,
        image: supplierImage,
        supplierItems: supplierItems,
      };

      axios
        .put(UPDATE_SUPPLIER_DETAILS_PATH + `${id}`, data)
        .then((res) => {
          if (res.data.success) {
            swal("Supplier Profile updated successfully", "", "success");
            setTimeout(() => {
              window.location = "/supplier/details";
            }, "3000");
          }
        });
    }
  };
  return (
    <div>
      <NavBar />

      <div className="container text-center my-2">
        <h1>Update Supplier Profile</h1>
        <hr />
      </div>

      <div className="container bg-white p-3 mb-5 shadow  rounded mt-5 col-lg-10 ">
        <div className="mx-2">
          {validateAlert ? (
            <p>
              <div class="alert alert-danger" role="alert">
                {fromValidate}
              </div>
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <form>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="suppliername" className="col-md-4 col-form-label">
                  <h5>Supplier Name : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    name="supplierName"
                    value={supplierName}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="phonenumber" className="col-md-4 col-form-label">
                  <h5>Phone Number : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="tel"
                    className="form-control"
                    name="supplierPno"
                    placeholder="Enter Phone Number"
                    pattern="[0-9]{10}"
                    value={supplierPno}
                    onChange={(e) => setSupplierPno(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="suppliername" className="col-md-4 col-form-label">
                  <h5>Email Address : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="email"
                    className="form-control"
                    name="supplierEmail"
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    placeholder="Enter Email Address"
                    value={supplierEmail}
                    onChange={(e) => setSupplierEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="phonenumber" className="col-md-4 col-form-label">
                  <h5>Location : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    name="supplierLocation"
                    placeholder="Enter Location"
                    value={supplierLocation}
                    onChange={(e) => setSupplierLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="suppliername" className="col-md-4 col-form-label">
                  <h5>Profile Image : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="file"
                    name="supplierImage"
                    className="form-control"
                    multiple={true}
                    onChange={(e) => {
                      setSupplierImage(e.target.files[0].name);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="phonenumber" className="col-md-4 col-form-label">
                  <h5>Supplier Items : </h5>
                </label>
                <div className="col-lg-8">
                  <textarea
                    className="form-control "
                    name="supplierItems"
                    placeholder="Enter Supplier Items"
                    maxLength={"150"}
                    value={supplierItems}
                    onChange={(e) => setSupplierItems(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <button
              className="btn btn-success col-md-2"
              onClick={onSubmit}
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
