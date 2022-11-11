/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import NavBar from "../IT20128036/supplier/NavBar";
import CreateItems from "./CreateSupplierItemsModal";

export default function SupplierItems() {
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [supplierId, setSupplierId] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [name, setName] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //access backend data using axios
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
        setName(response.data.exsitingSupplierDetails[0].name);
      });
  }, [supplierName]);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/getAll`).then((response) => {
      setItems(response.data.exsitingItems);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/item/delete/${id}`).then((res) => {
      if (res.data.success) {
        swal("Are you sure to delete this item?", "", "warning");
      }
      setTimeout(() => {
        window.location.reload();
      }, "3000");
    });
  };
  //search record

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items);
    }
  };

  return (
    <div>
      <NavBar />
      <br />

      <div className="container px-5 mb-5">
        <div className="row">
          <div className="float-left col-lg-9 mt-2 mb-2">
            &nbsp;
            <h2>Supplier - {name}</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            &nbsp;
            <input
              className="form-control border border-dark"
              type="search"
              placeholder="Search"
              onChange={(e) => searchItems(e.target.value)}
            ></input>
          </div>

          <hr />
        </div>
        <div>
          <CreateItems/>
        </div>
        &nbsp;
        <table className="table table-striped shadow table-bordered ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Available Stock Count</th>
              <th scope="col">Item Price (RS)</th>
              <th scope="col" style={{ width: "20%" }}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {searchInput.length > 1
              ? filteredResults.map((item, index) => {
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{item.itemName}</td>
                      <td>{item.stocks}</td>
                      <td>{item.price}</td>
                      <td className="text-center">
                        <a
                          className="btn btn-outline-success "
                          href={`/update/items/${item._id}`}
                        >
                          <i className="fa fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp; &nbsp; &nbsp;
                        <button
                          className="btn btn-outline-danger"
                          type="submit"
                          onClick={() => onDelete(item._id)}
                        >
                          <i className="fa fa-trash"></i>&nbsp;Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : items.map((item, index) => {
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{item.itemName}</td>
                      <td>{item.stocks}</td>
                      <td>{item.price}</td>

                      <td className="text-center">
                        <a
                          className="btn btn-success "
                          href={`/update/supplier/items/${item._id}`}
                        >
                          <i className="fa fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp; &nbsp; &nbsp;
                        <button
                          className="btn btn-danger"
                          type="submit"
                          onClick={() => onDelete(item._id)}
                        >
                          <i className="fa fa-trash"></i>&nbsp;Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
