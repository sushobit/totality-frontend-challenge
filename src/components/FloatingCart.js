import React from 'react';
import { Box, IconButton, Badge, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation configuration
const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
  tap: { scale: 0.9 },
};

function FloatingCart({ cart }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart', { state: { cart } }); // Pass cart data to the checkout page
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '16px',
        margin: '30px',
        right: '16px',
        backgroundColor: 'primary.main',
        filter: 'drop-shadow(1px 1px 20px #6c63ff)',
        borderRadius: '50%',
        boxShadow: 3,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tooltip title="Go to Checkout">
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={cart.reduce((total, item) => total + item.quantity, 0)} color="secondary">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <ShoppingCartIcon sx={{ fontSize: 50, color: 'white' }} />
            </motion.div>
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default FloatingCart;
