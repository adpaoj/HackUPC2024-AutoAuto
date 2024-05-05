import React, { useState } from 'react';
import Home from './components/Home';
import Alumno from './components/Alumno';
import Admin from './components/Admin';
import './App.css';
import Banner from './components/Banner';
import Calendario from './components/Calendario';

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
      case 'Calendario':
        return <Calendario />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`);
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
