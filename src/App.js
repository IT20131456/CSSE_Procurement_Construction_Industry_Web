import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sample from "./components/sample";
import SupplierDetails from "../src/components/IT20131456/SupplierDetails";
import SupplierGoodsDetails from "../src/components/IT20131456/SupplierDetails";
import DeliveryDetails from "../src/components/IT20131456/SupplierDetails";
import InvoiceDetails from "../src/components/IT20131456/SupplierDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample/>} />
        <Route path="/supplier/details" element={<SupplierDetails/>} />
        <Route path="/supplier/goods/details" element={<SupplierGoodsDetails/>} />
        <Route path="/delivery/details" element={<DeliveryDetails/>} />
        <Route path="/invoice/details" element={<InvoiceDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

