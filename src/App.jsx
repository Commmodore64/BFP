//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:taskId" element={<EditTask />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
