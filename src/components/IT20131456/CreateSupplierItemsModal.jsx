import { useState } from "react";
import axios from "axios";

function CreateSupplierItemsModal() {
  const [inputFields, setInputFields] = useState([]);
  const [retrivew, setRetrivew] = useState([]);
  const [subItem, setSubItem] = useState("");
  const [availability, setAvailability] = useState("");
  const [price, setPrice] = useState("");

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        subItem: "",
        availability:"",
        price:""
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const onSubmit = () => {
    var names = inputFields.map(function (inputField) {
      return inputField["subItem","availability","price"];
    });

    const data = 
{
  "sItem":[
{
  subItem: names.toString(),
  availability: names.toString(),
  price: names.toString(),
},
{
  
}

  ]
}





      

    
console.log(data)

    axios.post(`http://localhost:5000/add/item`, data).then((res) => {
      if (res.data.success) {
        console.log("success");

        setSubItem("");
        setAvailability("");
        setPrice("");
      }
    });

    setRetrivew(names.toString());
  };

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="fa fa-plus"></i>&nbsp; Add New Item
      </button>
      &nbsp;&nbsp;
      <div className="modal" id="exampleModal">
        <div className="modal-dialog modal-dialog-scrollable modal-lg pb-5">
          <div className="modal-content ">
            <div className="modal-header">
              <div className="text-center">
                <h3 className="modal-title">
                  <i className="fa fa-briefcase"></i>&nbsp;Add New Supplier
                  Items
                </h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <br />          
            <div className="modal-body">
              <div className="row" style={{ overflowX: "hidden" }}>
                <div className="col-md-12" style={{ marginLeft: "60px" }}>
            
                  {/* <div className="col-md-10">
                    <strong>Item Name :</strong>
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Enter Item Name"
                      name="itemName"
                      value=""
                    />
                  </div> */}

                  {inputFields.map((data, index) => {
                    const { subItem, availability, price } = data;
                    return (
                      <div className=" my-3" key={index}>
                        <div className="row">
                          <div className="col md-3">
                            <div className="form-group">
                              <input
                                type="text"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={subItem}
                                name="subItem"
                                className="form-control"
                                placeholder="Sub item name"
                              />
                            </div>
                          </div>

                          <div className="col md-3">
                            <div className="form-group">
                              <input
                                type="number"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={availability}
                                name="availability"
                                className="form-control"
                                placeholder="Availabilty"
                              />
                            </div>
                          </div>

                          <div className="col md-3">
                            <div className="form-group">
                              <input
                                type="text"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={price}
                                name="price"
                                className="form-control"
                                placeholder="Price Rs :-"
                              />
                            </div>
                          </div>

                          <div className="col md-3">
                            {inputFields.length !== 1 ? (
                              <button
                                className="btn btn-outline-danger"
                                onClick={removeInputFields}
                              >
                                x
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>{" "}
                      </div>
                    );
                  })}

                  <div className="row mt-5 mb-3">
                    <div className="col-sm-12">
                      <button
                        className="btn btn-outline-success "
                        onClick={addInputField}
                      >
                        Add New
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        className="btn btn-outline-primary "
                        onClick={onSubmit}
                      >
                        Save
                      </button>
                    </div>
                  </div>             
                </div>
              </div>
              {retrivew}
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateSupplierItemsModal;
