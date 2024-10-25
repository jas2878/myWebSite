import "./css/App.css";
import "./css/common.css";
import Mainpage from "./Mainpage";
import News from "./News";
import Introductio from "./Introductio";
import Safeinfo from "./Safeinfo";
import Simulation from "./Simulation";
import Solution from "./Solution";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="News" element={<News />}></Route>
          <Route path="Introductio" element={<Introductio />}></Route>
          <Route path="Safeinfo" element={<Safeinfo />}></Route>
          <Route path="Safeinfo" element={<Safeinfo />}></Route>
          <Route path="Simulation" element={<Simulation />}></Route>
          <Route path="Solution" element={<Solution />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
