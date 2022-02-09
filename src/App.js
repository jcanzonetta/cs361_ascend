import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import ClimbDetails from "./pages/ClimbDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} exact />
          <Route path="/climbdetails" element={<ClimbDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
