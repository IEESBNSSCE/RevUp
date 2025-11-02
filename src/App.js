import React from 'react';
// 1. Add 'basename' prop to the BrowserRouter import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import './index.css';

// Import components
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Schedule from './components/schedule.jsx';
import About from './components/about.jsx';
import RevUpPage from './pages/RevUpPage.jsx';
import Sponsors from './components/sponsors.jsx'; 
import Footer from './components/footer.jsx';

function App() {
  return (
    // 2. Add the basename prop here.
    //    It MUST match your repository name exactly.
    <BrowserRouter basename="/RevUp">
      
      <div className="App bg-gray-900 text-white min-h-screen font-sans">
        
        <Navbar />
        
        <main>
          <Routes>
            {/* With basename, this path now correctly maps to:
              [username].github.io/RevUp/ 
            */}
            <Route path="/" element={<Hero />} />
            
            {/* This path now correctly maps to:
              [username].github.io/RevUp/schedule 
            */}
            <Route path="/schedule" element={<Schedule />} />
            
            {/* Note: You wrote "revupp" (two 'p's) here. This will map to:
              [username].github.io/RevUp/revupp
              
              If your page is also called "RevUp" (one 'p'), 
              you might want to change this path to: path="/revup"
            */}
            <Route path="/revupp" element={<RevUpPage />} />
            
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            
            <Route path="*" element={
              <div className="text-center py-20 px-4">
                <h1 className="text-3xl font-bold text-cyan-400">404 - Page Not Found</h1>
                <p className="text-gray-300 mt-4">Sorry, the page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;