import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black p-4">
            <div className="terminal-window">
              <TypeWriter text="corp@Alinuxa.com..." />
            </div>
          </div>
        } />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}