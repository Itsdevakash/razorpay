import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import ThankYou from "./ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
