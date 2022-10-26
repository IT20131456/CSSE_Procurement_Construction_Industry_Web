import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from "../src/components/sample"
import SupplierLogin from "./components/IT20128036/supplier/UserLogin"
import SupplierRegistration from"./components/IT20128036/supplier/SupplierRegistration"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample/>} />
        <Route path="/user/login" element={<SupplierLogin/>} />
        <Route path="/supplier/registration" element={<SupplierRegistration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
