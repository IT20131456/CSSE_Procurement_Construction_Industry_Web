// import React, { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import NavBar from "../IT20128036/supplier/NavBar";

// export default function SupplierDetails() {
//   const [supplierDetails, setSupplierDetails] = useState([]);
//   const [supplierId, setSupplierId] = useState([]);
//   const [supplierName, setSupplierName] = useState([]);
//   const [supplierPno, setSupplierPno] = useState([]);
//   const [supplierEmail, setSupplierEmail] = useState([]);
//   const [supplierLocation, setSupplierLocation] = useState([]);
//   const [supplierItems, setSupplierItems] = useState([]);  
//   const [file, setfile] = useState("");
//   const [type, setType] = useState("");

//   useEffect(() => {
//     const userToken = localStorage.userToken;
//     const decoded = jwt_decode(userToken);
//     setSupplierId(decoded._id);
//     setSupplierName(decoded.name);
//     setSupplierPno(decoded.mobile);
//     setSupplierEmail(decoded.email);
  

//     let name = supplierName;

//     axios
//       .get(`http://localhost:5000/supplier/details/${name}`)
//       .then((response) => {
//         setSupplierDetails(response.data.exsitingSupplierDetails);
//         setSupplierLocation(response.data.exsitingSupplierDetails[0].location);
//         setSupplierItems(response.data.exsitingSupplierDetails[0].supplierItems);
//       });
//   }, [supplierName]);

//   const onChangeFile = (e) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       setfile(undefined);
//       return;
//     }

//     setfile(e.target.files[0]);
//   };

//   const onChangeClick = (e) => {
//     e.preventDefault();

//     const formdata = new FormData();

//     formdata.append("file", file);

//     axios
//       .put(`http://localhost:5000/photo/${uid}`, formdata)
//       .then((res) => {
//         swal("Updated successfully!", "", "success").then((value) => {
//           if (value) {
//             window.location = "/userprofile/view";
//           }
//         });
//       })

//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   var imageBasePath =    window.location.protocol + "//" + window.location.host + "/images/img1.png";
  
  
//     return (
//     <div>
//       <NavBar />

//       <div className="container text-center my-2">
//         <h1>Update Supplier Profile</h1>  
//         <hr />
//       </div>    

//       <div className="container bg-white p-3 mb-5 shadow  rounded mt-5 col-lg-10 ">
//       <form onSubmit={onChangeClick} encType="multipart/form-data">
//           <div className="row mt-3">
//             <div className="col-md-6">
//             <div class="form-group row mt-4 mx-2">
//                 <label for="suppliername" class="col-lg-4 col-form-label">
//                   <h5>Supplier Name : </h5>
//                 </label>
//                 <div class="col-lg-8">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Enter Supplier Name"
//                     name="supplierName"
//                     value={supplierName}
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div class="form-group row mt-4 mx-2">
//                 <label for="email" class="col-lg-4 col-form-label">
//                   <h5>Email Address : </h5>
//                 </label>
//                 <div class="col-lg-8">
//                   <input
//                     type="email"
//                     class="form-control"
//                     name="email"
//                     pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
//                     placeholder="Enter Email Address"
//                     value={supplierEmail}
//                   />
//                 </div>
//               </div>
//               <div class="form-group row mt-4 mx-2">
//                 <label for="email" class="col-lg-4 col-form-label">
//                   <h5>Email Address : </h5>
//                 </label>
//                 {file && (
//                       <img
//                         className="img shadow"
//                         src={preview}
//                         alt="select image"
//                       />
//                     )}
//                 <div class="col-lg-8">
//                 <input
//                       class="form-control"
//                       type="file"
//                       id="file"
//                       filename="file"
//                       onChange={onChangeFile}
//                       required
//                     />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">                 
//               <div class="form-group row mt-4 mx-2">
//                 <label for="phonenumber" class="col-lg-4 col-form-label">
//                   <h5>Phone Number : </h5>
//                 </label>
//                 <div class="col-lg-8">
//                   <input
//                     type="tel"
//                     class="form-control"
//                     name="phoneNumber"
//                     placeholder="Enter Phone Number"
//                     pattern="[0-9]{10}"
//                     value={supplierPno}
//                     readOnly
//                   />
//                 </div>
//               </div>             
//               <div class="form-group row mt-4 mx-2">
//                 <label for="location" class="col-lg-4 col-form-label">
//                   <h5>Location : </h5>
//                 </label>
//                 <div class="col-lg-8">
//                   <input
//                     type="text"
//                     class="form-control"
//                     name="location"
//                     placeholder="Enter Location"
//                     value={supplierLocation}
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div class="form-group row mt-4 mx-2">
//                 <label for="supplieritems" class="col-lg-4 col-form-label">
//                   <h5>Supplier Iteams : </h5>
//                 </label>
//                 <div class="col-lg-8">
//                   <textarea
//                     class="form-control "
//                     name="supplierItems"
//                     placeholder="Enter Supplier Items"
//                     maxLength={"150"}
//                     value={supplierItems}
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           &nbsp;
//         </form>
//       </div>
//     </div>
//   );
// }
