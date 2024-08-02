import React, { useState } from 'react';
import { Box, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FloatingCart from './components/FloatingCart';
import CartPage from './components/CartPage'; 
import CheckoutPage from './components/CheckoutPage'; 
import properties from './data/propertiesData';
import ThankYouPage from './components/ThankYouPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);
  const [priceFilter, setPriceFilter] = useState('all');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const filteredProperties = properties.filter(property => {
    if (priceFilter === 'all') return true;
    const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
    return property.price >= minPrice && property.price <= maxPrice;
  });

  console.log('Filtered properties:', filteredProperties); // Debug log

  const addToCart = (property) => {
    setCart(prevCart => {
      const existingProperty = prevCart.find(item => item.id === property.id);
      if (existingProperty) {
        return prevCart.map(item => item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...property, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Box sx={{ width: '100%' }}> {/* Ensures full width */}
        {isLoggedIn ? (
          <>
            <Header username={username} />
            <Box sx={{ background: 'linear-gradient(45deg, #e3f2fd 30%, #e3f2fd 90%)', padding: '16px' }}>
              <Container>
                <FormControl fullWidth sx={{ marginBottom: '16px' }}>
                  <InputLabel>Price Range</InputLabel>
                  <Select
                    value={priceFilter}
                    onChange={handleFilterChange}
                    label="Price Range"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="10000-30000">₹10,000 - ₹30,000</MenuItem>
                    <MenuItem value="30001-50000">₹30,001 - ₹50,000</MenuItem>
                    <MenuItem value="50001-70000">₹50,001 - ₹70,000</MenuItem>
                    <MenuItem value="70001-90000">₹70,001 - ₹90,000</MenuItem>
                    <MenuItem value="90001-100000">₹90,001 - ₹1,00,000</MenuItem>
                  </Select>
                </FormControl>
              </Container>
              <Routes>
                <Route path="/" element={<PropertyList properties={filteredProperties} addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} /> 
                <Route path="/thankyou" element={<ThankYouPage />} /> 
              </Routes>
              <FloatingCart cart={cart} />
            </Box>
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </Box>
    </Router>
  );
}

export default App;
