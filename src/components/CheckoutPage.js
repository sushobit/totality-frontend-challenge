import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton, Divider, TextField, Grid, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = React.useState(location.state?.cart || []);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Handle checkout logic here (e.g., form submission, API call)
    navigate('/thankyou');
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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      { (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 2 }}>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
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
              Total Amount: <strong>₹{calculateTotal()}</strong>
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>Payment Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Card Number"
                    variant="outlined"
                    fullWidth
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Expiry Date"
                    variant="outlined"
                    fullWidth
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
            </Box>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleCheckout}
                sx={{ mt: 2,
                    position: 'relative', 
                    overflow: 'hidden', 
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                    scale: 1.05,
                    animation: 'bn54rotate 0.7s ease-in-out both',
                    },
                    '&:active': {
                    scale: 0.95,
                    },
                    '@keyframes bn54rotate': {
                    '0%': {
                        transform: 'rotate(0deg) translate3d(0, 0, 0)',
                    },
                    '25%': {
                        transform: 'rotate(3deg) translate3d(0, 0, 0)',
                    },
                    '50%': {
                        transform: 'rotate(-3deg) translate3d(0, 0, 0)',
                    },
                    '75%': {
                        transform: 'rotate(1deg) translate3d(0, 0, 0)',
                    },
                    '100%': {
                        transform: 'rotate(0deg) translate3d(0, 0, 0)',
                    },
                    },
                 }}
              >
                Confirm Payment
              </Button>
            </motion.div>
          </Paper>
        </motion.div>
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

export default CheckoutPage;
