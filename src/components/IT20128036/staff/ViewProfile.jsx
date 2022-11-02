import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import swal from "sweetalert";
import NavBar from "../supplier/NavBar";

export default function ViewProfile() {
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [supplierId, setSupplierId] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [supplierPno, setSupplierPno] = useState([]);
  const [supplierEmail, setSupplierEmail] = useState([]);
  const [supplierLocation, setSupplierLocation] = useState([]);
  const [supplierItems, setSupplierItems] = useState([]);
  const [supplierImage, setSupplierImage] = useState([]);

  useEffect(() => {
    const userToken = localStorage.userToken;
    const decoded = jwt_decode(userToken);
    setSupplierId(decoded._id);
    setSupplierName(decoded.name);

    let name = supplierName;

    axios
      .get(`http://localhost:5000/supplier/details/${name}`)
      .then((response) => {
        setSupplierDetails(response.data.exsitingSupplierDetails);
        setSupplierImage(response.data.exsitingSupplierDetails[0].image);
        setSupplierLocation(response.data.exsitingSupplierDetails[0].location);
        setSupplierItems(
          response.data.exsitingSupplierDetails[0].supplierItems
        );
        setSupplierPno(response.data.exsitingSupplierDetails[0].mobile);
        setSupplierEmail(response.data.exsitingSupplierDetails[0].email);
      });
  }, [supplierName]);

  var imageBasePath =
    window.location.protocol + "//" + window.location.host + "/images/";
  return (
    <div>
      <NavBar />

      <div className="container text-center my-2">
        <h1>Supplier Details</h1>
        <hr />
      </div>
      <div className="container" style={{ textAlign: "right" }}></div>

      <div className="container bg-white p-3 mb-5 shadow  rounded mt-3 col-lg-10 ">
        <form>
          <div className="row mt-3">
            <div className="col-md-4 p-5">
              <img
                className="border border-dark"
                style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                name="photo"
                src={imageBasePath + supplierImage}
                alt="Not loadded"
              />
            </div>
            <div className="col-md-8">
              <h3>Personal Details &nbsp;</h3>
              <div className="form-group row mt-4 mx-5">
                <label for="suppliername" className="col-lg-4 col-form-label">
                  <h5>Supplier Name : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Supplier Name"
                    name="supplierName"
                    value={supplierName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row mt-4 mx-5">
                <label for="phonenumber" className="col-lg-4 col-form-label">
                  <h5>Phone Number : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    pattern="[0-9]{10}"
                    value={supplierPno}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row mt-4 mx-5">
                <label for="email" className="col-lg-4 col-form-label">
                  <h5>Email Address : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    placeholder="Enter Email Address"
                    value={supplierEmail}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row mt-4 mx-5">
                <label for="location" className="col-lg-4 col-form-label">
                  <h5>Location : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="Enter Location"
                    value={supplierLocation}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row mt-4 mx-5">
                <label for="supplieritems" className="col-lg-4 col-form-label">
                  <h5>Supplier Items : </h5>
                </label>
                <div className="col-lg-8">
                  <textarea
                    className="form-control "
                    name="supplierItems"
                    placeholder="Enter Supplier Items"
                    maxLength={"150"}
                    value={supplierItems}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          &nbsp;
        </form>
      </div>
      <div className="container">
        <a href="/supplier/req" className="btn btn-outline-success">
          Back
        </a>
      </div>
    </div>
  );
}
