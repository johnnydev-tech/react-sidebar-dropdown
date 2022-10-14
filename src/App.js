import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
