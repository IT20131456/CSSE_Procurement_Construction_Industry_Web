import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sample from "./components/sample";
import SupplierDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierGoodsDetails from "../src/components/IT20131456/SupplierDetails";
import DeliveryDetails from "../src/components/IT20131456/SupplierDetails";
import InvoiceDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierLogin from "./components/IT20128036/supplier/UserLogin"
import SupplierRegistration from"./components/IT20128036/supplier/SupplierRegistration"
import RequestedSippliers from "./components/IT20128036/staff/RequestedSuppliers";
import ApprovedSupplier from "./components/IT20128036/staff/ApprovedSupplier";


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Sample/>} />

        <Route path="/supplier/details" element={<SupplierDetails/>} />
        <Route path="/supplier/goods/details" element={<SupplierGoodsDetails/>} />
        <Route path="/delivery/details" element={<DeliveryDetails/>} />
        <Route path="/invoice/details" element={<InvoiceDetails/>} />

        <Route path="/user/login" element={<SupplierLogin/>} />
        <Route path="/supplier/registration" element={<SupplierRegistration/>} />

        <Route path="/supplier/req" element={<RequestedSippliers/>} />


        <Route path="/edit/:id" element={<ApprovedSupplier/>}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;

