import React, { useState, useEffect } from "react";
import "../css/Home.css";
import heroimage2 from "../assets/heroimage2.png";
import heroimage1 from "../assets/Heroimage1.png";
import productsData   from '../assets/products.json';
import profile from '../assets/profile1.png';

const Home = ({ navigateTo }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-container">
      <div className="header">
        <h1>B.planet</h1>
        <div className="contact-us" >
          <button onClick={() => navigateTo('contact')}>Contact us</button>
          <img src={profile} alt="Profile" onClick={() => navigateTo('profile')}/>
        </div>
      </div>
      <div className="main-content">
        <h2>As interesting as a plant</h2>
        <img src={heroimage1} alt="Main Plant" />
        <img src={heroimage2} alt="Main Plant" />
      </div>
      <div className="featured-products">
        <h2>Featured Product</h2>
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="product-item"
              onClick={() => navigateTo('description', product.id)}
            >
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
        <div className="pagination">
          {currentPage > 1 && <a onClick={() => paginate(currentPage - 1)}>Previous</a>}
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
            <a key={number} onClick={() => paginate(number + 1)} className={currentPage === number + 1 ? 'active' : ''}>
              {number + 1}
            </a>
          ))}
          {currentPage < Math.ceil(products.length / productsPerPage) && <a onClick={() => paginate(currentPage + 1)}>Next</a>}
        </div>
      </div>
    </div>
  );
};

export default Home;
