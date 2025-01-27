import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/index" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
