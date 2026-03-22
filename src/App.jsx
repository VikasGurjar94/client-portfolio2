import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Research from './pages/Research';
import PreviousAffiliations from './pages/PreviousAffiliations';
import Publications from './pages/Publications';
import Presentations from './pages/Presentations';
import Talks from './pages/Talks';
import Miscellaneous from './pages/Miscellaneous';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/previous-affiliations" element={<PreviousAffiliations />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
