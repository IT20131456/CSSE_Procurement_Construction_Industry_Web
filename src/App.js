import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from "../src/components/sample"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
