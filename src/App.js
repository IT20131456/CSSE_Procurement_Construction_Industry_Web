import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sample from "./components/sample";
import SupplierDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierGoodsDetails from "../src/components/IT20131456/SupplierDetails";
import DeliveryDetails from "../src/components/IT20131456/SupplierDetails";
import InvoiceDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierLogin from "./components/IT20128036/supplier/UserLogin"
import SupplierRegistration from"./components/IT20128036/supplier/SupplierRegistration"
import ViewTendersStaff from "./components/IT20125202/ViewTendersStaff";
import ViewTendersSuppliers from "./components/IT20125202/ViewTendersSuppliers";
import ViewTenderDetailsStaff from "./components/IT20125202/ViewTenderDetailsStaff";
import ViewTenderDetailsSuppliers from "./components/IT20125202/ViewTenderDetailsSuppliers";


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

        <Route path="/staff/tenders" element={<ViewTendersStaff/>} />
        <Route path="/suppliers/tenders" element={<ViewTendersSuppliers/>} />
        <Route path="/staff/tender/:id" element={<ViewTenderDetailsStaff/>} />
        <Route path="/suppliers/tender/:id" element={<ViewTenderDetailsSuppliers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

