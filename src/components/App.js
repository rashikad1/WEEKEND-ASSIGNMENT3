import React, { useState } from 'react';
import Home from '../components/Home';
import Description from '../components/Description';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateTo = (page, product = null) => {
    setCurrentPage(page);
    setSelectedProduct(product);
  };

  return (
    <div>
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'description' && selectedProduct && (
        <Description product={selectedProduct} navigateTo={navigateTo} />
      )}
      {currentPage === 'profile' && <Profile navigateTo={navigateTo} />}
      {currentPage === 'contact' && <Contact navigateTo={navigateTo} />}
      {currentPage === 'login' && <Login navigateTo={navigateTo} />}
      {currentPage === 'signup' && <Signup navigateTo={navigateTo} />}
    </div>
  );
};

export default App;
