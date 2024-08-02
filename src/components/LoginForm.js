import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, CircularProgress, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogin = () => {
    if (username && password) {
      setLoading(true);
      // Simulate a login API call
      setTimeout(() => {
        onLogin(username);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        bgcolor: '#e3f2fd', // Background color
        p: 3, // Padding
        borderRadius: 3,
        boxShadow: 6,
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ mb: 4, color: '#0288d1', fontWeight: 'bold' }}
        >
          Login
        </Typography>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
          sx={{ mb: 3, borderRadius: 2, bgcolor: '#ffffff' }}
          InputProps={{
            sx: { borderRadius: 2 }, // Rounded corners for the input
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          sx={{ mb: 3, borderRadius: 2, bgcolor: '#ffffff' }}
          InputProps={{
            sx: { borderRadius: 2 }, // Rounded corners for the input
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogin}
          disabled={loading}
          sx={{ 
            mt: 2, 
            borderRadius: 3, 
            position: 'relative', 
            px: 4, 
            py: 1.5, 
            textTransform: 'none',
            boxShadow: 3,
            '&:hover': {
              backgroundColor: '#0288d1',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            }
          }}
        >
          {loading && <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />}
          {loading ? 'Logging in...' : 'Login'}
        </Button>
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

export default LoginForm;
