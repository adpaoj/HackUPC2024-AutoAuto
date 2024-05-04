import React, { useState } from 'react';
import Home from './Home';
import Alumno from './Alumno';
import Admin from './Admin';
import './App.css';
import Banner from './Banner';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'Alumno':
        return <Alumno />;
      case 'Admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Banner onNavigate={handleNavigation} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
