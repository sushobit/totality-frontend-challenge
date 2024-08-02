import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ThankYouPage() {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page or any other page
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
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom>Thank You!</Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            Your payment was successful. We appreciate your business!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You will receive an email confirmation shortly. If you have any questions or need further assistance, feel free to contact us.
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Thank you for choosing our service. We look forward to serving you again!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleHomeClick}
            sx={{
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
            Go to Homepage
          </Button>
        </Paper>
      </motion.div>
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

export default ThankYouPage;
