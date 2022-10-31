import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import NavBar from "../supplier/NavBar";

export default function ApprovedSupplier() {
  const { id } = useParams();

   const [supplierDetails, setSupplierDetails] = useState("");
  const [supplierName, setSupplierName] = useState(""); 
  const [supplierMobile, setSupplierMobile] = useState(""); 
  const [supplierEmail, setSupplierEmail] = useState(""); 
  const [supplierLocation, setSupplierLocation] = useState(""); 
  
  useEffect(() => {
   

    axios
      .get(`http://localhost:5000/supplier/${id}`)
      .then((response) => {
        
        setSupplierName(response.data.exsitingSupplierDetails.name);
        setSupplierEmail(response.data.exsitingSupplierDetails.email);
        setSupplierMobile(response.data.exsitingSupplierDetails.mobile);
        setSupplierLocation(response.data.exsitingSupplierDetails.location);
        console.log(response.data.exsitingSupplierDetails.name);    
      });
    
  },[supplierName] );


  var imageBasePath =
    window.location.protocol + "//" + window.location.host + "/images/img1.png";
  return (
    <div>
       <NavBar />
      
      <div className="container text-center my-2">
        <h1>Supplier Details {supplierName}</h1>
        <hr />
      </div>
   

      <div className="container bg-white p-3 mb-5 shadow  rounded mt-3 col-lg-10 ">
        <form>
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                style={{ height: "100%", width: "100%" }}
                name="photo"
                src={imageBasePath}
                alt="Not loadded"
              />
            </div>
            <div className="col-md-8">
              <h3>
                Personal Details &nbsp;
               
              </h3>
              <div class="form-group row mt-4 mx-5">
                <label for="suppliername" class="col-lg-4 col-form-label">
                  <h5>Supplier Name : </h5>
                </label>
                <div class="col-lg-8">
                  <input
                    type="text"
                    class="form-control"                  
                    name="supplierName"
                    value={supplierName}
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row mt-4 mx-5">
                <label for="phonenumber" class="col-lg-4 col-form-label">
                  <h5>Phone Number : </h5>
                </label>
                <div class="col-lg-8">
                  <input
                    type="tel"
                    class="form-control"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                  value={supplierMobile}
                  disabled
                  />
                </div>
              </div>
              <div class="form-group row mt-4 mx-5">
                <label for="email" class="col-lg-4 col-form-label">
                  <h5>Email Address : </h5>
                </label>
                <div class="col-lg-8">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={supplierEmail}
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row mt-4 mx-5">
                <label for="location" class="col-lg-4 col-form-label">
                  <h5>Location : </h5>
                </label>
                <div class="col-lg-8">
                  <input
                    type="text"
                    class="form-control"
                    name="location"
                    value={supplierLocation}
                    disabled
                  />
                </div>
              </div>
             
            </div>
          </div>
          &nbsp;
        </form>
      </div>

<div className="row">
  <div className="col-sm-6"></div>
  <div className="col-sm-6">
<a href="" className="btn btn-danger  mb-4 mx-4 me-4">Restrict Supplier</a>
<a href="" className="btn btn-primary  mb-4 mx-4 me-4">Approve Supplier</a>
</div>
</div>

      
    </div>
  );
}
