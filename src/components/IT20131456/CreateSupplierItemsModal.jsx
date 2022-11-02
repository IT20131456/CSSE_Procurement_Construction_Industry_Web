/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";

export default function CreateSupplierItemsModal() {
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [supplierId, setSupplierId] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [name, setName] = useState([]);
  const [itemName, setItemName] = useState("");
  const [stocks, setStocks] = useState("");
  const [price, setPrice] = useState("");
  const [fromValidate, setFromValidate] = useState("");
  const [fromValidateSuccess, setfromValidateSuccess] = useState("");
  const [validateAlert, setValidateAlert] = useState(false);
  const [validateAlertSuccess, setValidateAlertSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
//input fileds validations
    if (itemName === "") {
      setValidateAlert(true);
      setFromValidate("Please Enter Item Name");
    } else if (stocks === "") {
      setValidateAlert(true);
      setFromValidate("Please Input Available stocks count");
    } else if (price === "") {
      setValidateAlert(true);
      setFromValidate("Please Input Item Price");
    } else {
      setValidateAlertSuccess(true);
      setfromValidateSuccess("Successfully Data Added!");
    }

    const data = {
      supplierName: name,
      itemName: itemName,
      stocks: stocks,
      price: price,
    };
//post data to the backend using axios
    console.log(data);
    axios.post(`http://localhost:5000/add/item`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        swal("Vacancy created successfully", "", "success");

        setTimeout(() => {
          window.location = "/supplier/items/details";
        }, "3000");

        setName("");
        setItemName("");
        setStocks("");
        setPrice("");
      }
    });
  };

  useEffect(() => {
    const userToken = localStorage.userToken;
    const decoded = jwt_decode(userToken);
    setSupplierId(decoded._id);
    setSupplierName(decoded.name);

    let name = supplierName;
//Get data to the backend using axios
    axios
      .get(`http://localhost:5000/supplier/details/${name}`)
      .then((response) => {
        setSupplierDetails(response.data.exsitingSupplierDetails);
        setName(response.data.exsitingSupplierDetails[0].name);
      });
  }, [supplierName]);

  return (
    <div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fa fa-plus"></i>&nbsp; Add New Item
        </button>
        <div className="modal" id="exampleModal">
          <div className="modal-dialog modal-dialog-scrollable modal-md pb-5">
            <div className="modal-content ">
              <div className="modal-header">
                <div className="text-center">
                  <h3 className="modal-title">
                    <i className="fa fa-briefcase"></i>&nbsp; Add New Item
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <br />
             {/* Validation Alert messages */}
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
                {validateAlertSuccess ? (
                  <p>
                    <div class="alert alert-success" role="alert">
                      {fromValidateSuccess}
                    </div>
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="modal-body">
                {/* Declare a form */}
                <form onSubmit={onSubmit}>
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>
                        Item Name <span className="_label" />
                      </strong>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="itemname"
                        placeholder="Enter Item Name"
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>
                        Availabile Stocks <span className="_label" />
                      </strong>
                      <input
                        type="number"
                        className="form-control"
                        name="stocks"
                        placeholder="Enter Value"
                        onChange={(e) => setStocks(e.target.value)}
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>
                        Item Price (per one)
                        <span className="_label" />
                      </strong>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Enter Item Price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className=" my-4 mx-3">
                    <div className="form-group text-center">
                      <button
                        className="btn btn-primary col-md-4"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
