import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../supplier/NavBar";

//this function is use to view all registered suppliers details
export default function RequestedSippliers() {
  const [supplier, setSupplier] = useState([]);
  const [MyImage, setImage] = useState("user.png");

  useEffect(() => {
    //retrive all supplier detals
    axios.get("http://localhost:5000/supplier/details/getAll").then((res) => {
      if (res.data.success) {
        setSupplier(res.data.exsitingSupplierDetails);
      }
    });
  }, []);

  const secondColumnStart = Math.ceil(supplier.length / 2);
  var imageBasePath =
    window.location.protocol + "//" + window.location.host + "/images/";

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2 className="text-center mt-4 mb-4"> Registered Suppliers</h2>

        <div className="container border  border-secondary rounded-3 shadow-lg">
          <div className="row">
            <div className="col-sm-5 mx-2 me-2">
              {supplier.slice(0, secondColumnStart).map((data, index) => {
                return (
                  <div class="card mt-4 mb-4">
                    <div class="card-body">
                      <p class="card-text">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="d-flex justify-content-center">
                              <img
                                className="img"
                                style={{ width: "90px", height: "90px" }}
                                src={imageBasePath + MyImage}
                                alt="alt"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <h5 class="card-title">{data.name}</h5>
                            <i class="fa fa-map-marker" aria-hidden="true">
                              &nbsp;&nbsp;{data.address}
                            </i>
                          </div>
                          <div className="col-sm-4 mb-2">
                            <a
                              href={`/profile/view/${data.name}`}
                              class="btn btn-danger rounded-pill"
                            >
                              Preview
                              <span class="position-absolute top-0 start-100 translate-middle badge  bg-success">
                                {data.supstatus}
                                <span class="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </a>
                            <br></br>
                            <a
                              href={`/supplier/check/${data._id}`}
                              class="btn btn-primary mt-2 rounded-pill"
                            >
                              &nbsp;&nbsp;Action
                            </a>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-sm-5 mx-2 me-2">
              {supplier.slice(secondColumnStart).map((data, index) => {
                return (
                  <div class="card mt-4 mb-4">
                    <div class="card-body">
                      <p class="card-text">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="d-flex justify-content-center">
                              <img
                                className="img"
                                style={{ width: "90px", height: "90px" }}
                                src={imageBasePath + MyImage}
                                alt="alt"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <h5 class="card-title">{data.name}</h5>
                            <i class="fa fa-map-marker" aria-hidden="true">
                              &nbsp;&nbsp;{data.address}
                            </i>
                          </div>
                          <div className="col-sm-4 mb-2">
                            <a
                              href={`/profile/view/${data.name}`}
                              class="btn btn-danger rounded-pill"
                            >
                              Preview
                              <span class="position-absolute top-0 start-100 translate-middle badge  bg-success">
                                {data.supstatus}
                                <span class="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </a>
                            <br></br>
                            <a
                              href={`/supplier/check/${data._id}`}
                              class="btn btn-primary mt-2  rounded-pill"
                            >
                              &nbsp;&nbsp;Action
                            </a>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
