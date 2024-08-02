import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';


function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cart, setCart] = React.useState(location.state?.cart || []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{ 
        padding: '24px', 
        backgroundColor: '#f0f2f5', 
        minHeight: '100vh' 
      }}
    >
      <Typography variant="h4" gutterBottom>Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ListItem>
                  <ListItemText
                    primary={item.title}
                    secondary={`Quantity: ${item.quantity} - Price: ₹${item.price}`}
                  />
                  <IconButton onClick={() => removeFromCart(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Total Amount: ₹{calculateTotal()}
          </Typography>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCheckout}
              sx={{ mt: 2 }}
            >
              Proceed to Payment
            </Button>
          </motion.div>
        </>
      )}
      <div
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          left: cursorPosition.x,
          top: cursorPosition.y,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />
    </Box>
  );
}

export default CartPage;
