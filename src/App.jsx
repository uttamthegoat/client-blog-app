import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authenticate from "./pages/Authenticate";
import Navbar from "./components/static/Navbar";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Authenticate color={"pink"} />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/home" element={<Posts />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
