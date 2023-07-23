import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authenticate from "./pages/Authenticate";
import Navbar from "./components/static/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Authenticate color={"pink"} />} />
          {/* <Route exact path="/" element={<Signup />} /> */}
          {/* <Route exact path="/home" element={<Posts />} /> */}
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
