import './App.css';
import { useState } from 'react';
import SidebarWrapper from './components/sidebar';
import Prediction from './components/prediction';
import About from './components/about';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ApiPage from './components/apiPage';

function App() {
  const [valuation, setValuation] = useState(0);

  const toggleTheme = () => {
    console.log('theme toggled');
    document.body.classList.toggle('dark-theme-variables');

    const themeToggler = document.querySelector('.theme-toggler');
    themeToggler.querySelector('span').classList.toggle('active');
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <SidebarWrapper />
        <Routes>
          <Route path='/' element={<Prediction valuation={valuation} setValuation={setValuation}/>} />
          <Route path='api' element={<ApiPage />} />
          <Route path='about' element={<About />} />
        </Routes>
        <div className='right'>
          <div className='top'>
            <button id='menu-btn'>
              <span className='material-icons-sharp'>menu</span>
            </button>
            <div className='theme-toggler' onClick={() => toggleTheme()}>
              <span className='material-icons-sharp active'>light_mode</span>
              <span className='material-icons-sharp'>dark_mode</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
