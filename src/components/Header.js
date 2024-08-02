import React from 'react';
import { Box, Typography, Button, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header({ username }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHeaderClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.location.href = '/login'; 
  };

  return (
    <Box
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%',
        padding: '16px', 
        backgroundColor: 'primary.main', 
        color: 'white', 
        boxSizing: 'border-box',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
      onClick={handleHeaderClick}
    >
      <Typography variant="h5" sx={{ flex: 1, fontWeight: '600' }}>
        PrimeRentals
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {username ? (
          <>
            <Typography variant="body1" sx={{ marginRight: '16px',}}>
              Welcome, <strong style={{ fontWeight: '900', fontStyle: 'italic', }}>{username}</strong>
            </Typography>
            <IconButton
              onClick={handleMenuOpen}
              aria-controls="profile-menu"
              aria-haspopup="true"
              aria-label="Account of current user"
              color="inherit"
              sx={{ p: 0 }}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {username.charAt(0)}
              </Avatar>
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/profile')}>My Account</MenuItem>
              <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button variant="contained" onClick={() => navigate('/login')} sx={{ bgcolor: 'secondary.main', color: 'white' }}>
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Header;
