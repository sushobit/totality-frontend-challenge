import React from 'react';
import { Box, Typography, Avatar, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

function ProfilePage({ username }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
        p: 3,
      }}
    >
      <MotionPaper
        elevation={3}
        sx={{
          width: '90%',
          maxWidth: 600,
          borderRadius: 2,
          padding: 3,
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            margin: '0 auto 16px',
            bgcolor: '#1976d2',
            fontSize: 48,
          }}
        >
          {username.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" gutterBottom>
          {username}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome to your profile page! Here you can view and manage your personal information. Customize your experience and explore more options by navigating through the menu.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Feel free to edit your details, update your password, and adjust your preferences. Your account settings are just a click away.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => alert('Edit Profile Clicked')}
        >
          Edit Profile
        </Button>
      </MotionPaper>
    </Box>
  );
}

export default ProfilePage;
