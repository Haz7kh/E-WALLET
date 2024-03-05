import React from "react";
import NewCard from "../newCard/NewCard";
import AddCard from "../addCard/AddCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function EWallet() {
  return (
    <div className="wallet">
      <Router>
        <Routes>
          <Route path="/" element={<NewCard />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
      </Router>
    </div>
  );
}
