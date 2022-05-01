import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import AnalysisPage from './components/AnalysisPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visualizations" element={<AnalysisPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
