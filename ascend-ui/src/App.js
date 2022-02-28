import "./App.css";
import HomePage from "./pages/HomePage";
import ClimbDetails from "./pages/ClimbDetails";
import SearchPage from "./pages/SearchPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} exact />
          <Route path="/find" element={<SearchPage />} />
          <Route path="/climbdetails/:_id" element={<ClimbDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
