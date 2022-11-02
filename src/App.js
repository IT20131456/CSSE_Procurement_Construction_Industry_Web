import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SupplierDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierItemsDetails from "./components/IT20131456/SupplierItems";
import SupplierLogin from "./components/IT20128036/supplier/UserLogin"
import SupplierRegistration from"./components/IT20128036/supplier/SupplierRegistration"
import UpdateSupplierDetails from "./components/IT20131456/UpdateSupplierDetails"
import RequestedSippliers from "./components/IT20128036/staff/RequestedSuppliers";

import CheckSupplier from "./components/IT20128036/staff/CheckSupplier";


import ViewTendersStaff from "./components/IT20125202/ViewTendersStaff";
import ViewTendersSuppliers from "./components/IT20125202/ViewTendersSuppliers";
import ViewTenderDetailsStaff from "./components/IT20125202/ViewTenderDetailsStaff";
import ViewTenderDetailsSuppliers from "./components/IT20125202/ViewTenderDetailsSuppliers";
import SupplierItems from "./components/IT20131456/UpdateItems";

import ApprovedSuppriers from "./components/IT20128036/staff/ApprovedSuppliers";
import ViewProfile from "./components/IT20128036/staff/ViewProfile";



function App() {
  return (
    <BrowserRouter>
      <Routes>   

        <Route path="/supplier/details" element={<SupplierDetails/>} />
        <Route path="/update/supplier/details/:id" element={<UpdateSupplierDetails/>} />
        <Route path="/supplier/items/details" element={<SupplierItemsDetails/>} />
        <Route path="/update/supplier/items/:id" element={<SupplierItems/>} />

        <Route path="/user/login" element={<SupplierLogin/>} />
        <Route path="/supplier/registration" element={<SupplierRegistration/>} />

        <Route path="/supplier/req" element={<RequestedSippliers/>} />



        <Route path="/supplier/check/:id" element={<CheckSupplier/>}></Route>



 
        <Route path="/staff/tenders" element={<ViewTendersStaff/>} />
        <Route path="/suppliers/tenders" element={<ViewTendersSuppliers/>} />
        <Route path="/staff/tender/:id" element={<ViewTenderDetailsStaff/>} />
        <Route path="/suppliers/tender/:id" element={<ViewTenderDetailsSuppliers/>} />

        <Route path="/approved/supplier" element={<ApprovedSuppriers/>}></Route>

        <Route path="/profile/view/:id" element={<ViewProfile/>}></Route>


        
    


        


      </Routes>
    </BrowserRouter>
  );
}

export default App;

