import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sample from "./components/IT20131456/CreateSupplierItemsModal";
import SupplierDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierGoodsDetails from "../src/components/IT20131456/SupplierGoodsDetails";
import DeliveryDetails from "../src/components/IT20131456/SupplierDetails";
import InvoiceDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierLogin from "./components/IT20128036/supplier/UserLogin"
import SupplierRegistration from"./components/IT20128036/supplier/SupplierRegistration"
import UpdateSupplierDetails from "./components/IT20131456/UpdateSupplierDetails"
import RequestedSippliers from "./components/IT20128036/staff/RequestedSuppliers";



function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Sample/>} />

        <Route path="/supplier/details" element={<SupplierDetails/>} />
        <Route path="/update/supplier/details/:id" element={<UpdateSupplierDetails/>} />
        <Route path="/supplier/goods/details" element={<SupplierGoodsDetails/>} />
        <Route path="/delivery/details" element={<DeliveryDetails/>} />
        <Route path="/invoice/details" element={<InvoiceDetails/>} />

        <Route path="/user/login" element={<SupplierLogin/>} />
        <Route path="/supplier/registration" element={<SupplierRegistration/>} />

        <Route path="/supplier/req" element={<RequestedSippliers/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

