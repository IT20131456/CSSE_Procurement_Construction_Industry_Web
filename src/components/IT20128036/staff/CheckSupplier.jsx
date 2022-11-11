/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import NavBar from "../supplier/NavBar";
import swal from "sweetalert";
import { specificProfile } from "./AxiosCall";
import { AllItems } from "./AxiosCall";
import { supplierUpdate } from "./AxiosCall";

export default function CheckSupplier() {
  //get paraam id
  const { id } = useParams();

  const [supplierDetails, setSupplierDetails] = useState("");
  const [supplierName, setSupplierName] = useState("");

  const [supplierLocation, setSupplierLocation] = useState("");
  const [supApproved] = useState("Approved");
  const [supDecline] = useState("Decline");
  const [Item1] = useState("Cement 50Kg");
  const [Item2] = useState("H-beam 44mm");
  const [Item3] = useState("sands cube");
  const [Item4] = useState("stone cube");
  const [Item1d] = useState("No Item");
  const [Item2d] = useState("No Item");
  const [Item3d] = useState("No Item");
  const [Item4d] = useState("No Item");

  const [items, setItems] = useState([]);

  useEffect(() => {
    //retrive specific supplier details
    specificProfile(id).then((response) => {
      setSupplierName(response.data.exsitingSupplierDetails.name);

      setSupplierLocation(response.data.exsitingSupplierDetails.location);
      console.log(response.data.exsitingSupplierDetails.name);
    });
  }, [supplierName]);

  useEffect(() => {
    //retrive all items details
    AllItems().then((response) => {
      setItems(response.data.exsitingItems);
    });
  }, []);

  const approve = (e) => {
    e.preventDefault();
    const data = {
      supstatus: supApproved,
    };

    console.log(data);
    //update specific suppllier details
    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Supplier Approved", "", "success");
        setTimeout(() => {
          window.location = "/supplier/req";
        }, "3000");
      }
    });
  };

  const decline = (e) => {
    e.preventDefault();
    const data = {
      supstatus: supDecline,
    };

    console.log(data);
    //update specific supplier details
    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Supplier Restricted", "", "warning");
        setTimeout(() => {
          window.location = "/supplier/req";
        }, "3000");
      }
    });
  };

  const item1 = (e) => {
    e.preventDefault();
    const data = {
      item1: Item1,
    };

    console.log(data);
    //update specific supplier

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal(" Approved Successfully", "", "success");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item2 = (e) => {
    e.preventDefault();
    const data = {
      item2: Item2,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Approved Successfully", "", "success");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item3 = (e) => {
    e.preventDefault();
    const data = {
      item3: Item3,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Approved Successfully", "", "success");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item4 = (e) => {
    e.preventDefault();
    const data = {
      item4: Item4,
    };

    console.log(data);
    //update specific supplier data
    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Approved Successfully", "", "success");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item1d = (e) => {
    e.preventDefault();
    const data = {
      item1: Item1d,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal(" Decline Item", "", "warning");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item2d = (e) => {
    e.preventDefault();
    const data = {
      item2: Item2d,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Decline Item", "", "warning");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item3d = (e) => {
    e.preventDefault();
    const data = {
      item3: Item3d,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Decline Item", "", "warning");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  const item4d = (e) => {
    e.preventDefault();
    const data = {
      item4: Item4d,
    };

    console.log(data);
    //update specific supplier data

    supplierUpdate(id, data).then((res) => {
      if (res.data.success) {
        swal("Decline Item", "", "warning");
        setTimeout(() => {
          window.location = `/supplier/check/${id}`;
        }, "3000");
      }
    });
  };

  var imageBasePath =
    window.location.protocol + "//" + window.location.host + "/images/img1.png";
  return (
    <div>
      <NavBar />

      <div className="container text-center my-2">
        <h1>Supplier Details</h1>
        <hr />
      </div>

      <div className="container bg-white p-3 mb-5 shadow  rounded mt-3 col-lg-10 ">
        <form>
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                style={{ height: "200px", width: "200px" }}
                name="photo"
                src={imageBasePath}
                alt="Not loadded"
              />
            </div>
            <div className="col-md-8">
              <h3>Personal Details &nbsp;</h3>
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

      <div className="container">
        <div className="row border d-flex p-2 bd-highlight">
          <div className="col-sm-3">
            <i class="fa fa-telegram" aria-hidden="true">
              &nbsp;&nbsp;Cement
            </i>
          </div>

          <div className="col-sm-4">50Kg</div>

          <div className="col-sm-5">
            <a
              href=""
              onClick={item1}
              className="btn btn-success  mb-4 mx-4 me-4"
            >
              Approve
            </a>
            <a
              href=""
              onClick={item1d}
              className="btn btn-danger  mb-4 mx-4 me-4"
            >
              Decline
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border d-flex p-2 bd-highlight">
          <div className="col-sm-3">
            <i class="fa fa-telegram" aria-hidden="true">
              &nbsp;&nbsp;H-beam 44mm
            </i>
          </div>

          <div className="col-sm-4">60</div>

          <div className="col-sm-5">
            <a
              href=""
              onClick={item2}
              className="btn btn-success  mb-4 mx-4 me-4"
            >
              Approve
            </a>
            <a
              href=""
              onClick={item2d}
              className="btn btn-danger  mb-4 mx-4 me-4"
            >
              Decline
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border d-flex p-2 bd-highlight">
          <div className="col-sm-3">
            <i class="fa fa-telegram" aria-hidden="true">
              &nbsp;&nbsp;sands cube
            </i>
          </div>

          <div className="col-sm-4">30</div>

          <div className="col-sm-5">
            <a
              href=""
              onClick={item3}
              className="btn btn-success  mb-4 mx-4 me-4"
            >
              Approve
            </a>
            <a
              href=""
              onClick={item3d}
              className="btn btn-danger  mb-4 mx-4 me-4"
            >
              Decline
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border d-flex p-2 bd-highlight">
          <div className="col-sm-3">
            <i class="fa fa-telegram" aria-hidden="true">
              &nbsp;&nbsp;stone cube
            </i>
          </div>

          <div className="col-sm-4">15</div>

          <div className="col-sm-5">
            <a
              href=""
              onClick={item4}
              className="btn btn-success  mb-4 mx-4 me-4"
            >
              Approve
            </a>
            <a
              href=""
              onClick={item4d}
              className="btn btn-danger  mb-4 mx-4 me-4"
            >
              Decline
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <a
            href=""
            onClick={decline}
            className="btn btn-danger   mb-4 mx-4 me-4"
          >
            Restrict Supplier
          </a>
          <a
            href=""
            onClick={approve}
            className="btn btn-primary  mb-4 mx-4 me-4"
          >
            Approve Supplier
          </a>
        </div>
      </div>
    </div>
  );
}
