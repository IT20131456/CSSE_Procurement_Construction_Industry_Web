/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import NavBar from "../IT20128036/supplier/NavBar";

export default function SupplierDetails() {
  const { id } = useParams();
  const [name, setName] = useState([]);
  const [itemName, setItemName] = useState("");
  const [stocks, setStocks] = useState("");
  const [price, setPrice] = useState("");
  const [fromValidate, setFromValidate] = useState("");
  const [fromValidateSuccess, setfromValidateSuccess] = useState("");
  const [validateAlert, setValidateAlert] = useState(false);
  const [validateAlertSuccess, setValidateAlertSuccess] = useState(false);

    //access backend data using axios
  useEffect(() => {
    axios.get(`http://localhost:5000/item/get/${id}`).then((response) => {
      console.log(response.data.exsitingItems);
      setName(response.data.exsitingItems.supplierName);
      setItemName(response.data.exsitingItems.itemName);
      setStocks(response.data.exsitingItems.stocks);
      setPrice(response.data.exsitingItems.price);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      supplierName: name,
      itemName: itemName,
      stocks: stocks,
      price: price,
    };

    axios.put(`http://localhost:5000/item/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal("Items updated successfully", "", "success");
        setTimeout(() => {
          window.location = "/supplier/items/details";
        }, "3000");
      }
    });
  };
  return (
    <div>
      <NavBar />

      <div className="container text-center my-2">
        <h1>Update Item Details</h1>
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
                    value={name}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="itemname" className="col-md-4 col-form-label">
                  <h5>Item Name : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="itemname"
                    placeholder="Enter Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="stocks" className="col-md-4 col-form-label">
                  <h5>Availabile Stocks : </h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    name="stocks"
                    placeholder="Enter Value"
                    value={stocks}
                    onChange={(e) => setStocks(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row mt-4 mx-1">
                <label for="price" className="col-md-4 col-form-label">
                  <h5>Item Price :</h5>
                </label>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Enter Item Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
