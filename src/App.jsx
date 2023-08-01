import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/static/Navbar";
import ScrollToTop from "./components/static/ScrollToTop";
import Footer from "./components/static/Footer";
import { routes } from "./utils/routes";
import Alert from "./components/static/Alert";

function App() {
  return (
    <div className="App flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500">
      <Router>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Navbar />
          <ScrollToTop />
          <Alert />
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.id}
                  exact
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
          <Footer />
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
