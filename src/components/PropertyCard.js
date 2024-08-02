import React from 'react';
import { Box, Card, CardContent, Typography, Button, CardMedia, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';


const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);

function PropertyCard({ property, addToCart }) {
  return (
    <MotionCard
      sx={{
        maxWidth: 345,
        marginBottom: '16px',
        transition: 'box-shadow 0.3s ease',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        filter: 'drop-shadow(1px 1px 20px #6c63ff)',
        borderRadius: '20px',
      }}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt={property.title}
      />
      <MotionCardContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="h6" component="div" sx={{ margin: '8px 0' }}>
          ₹{property.price}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <LocationOnIcon sx={{ marginRight: '8px' }} />
          <Typography variant="body2">{property.location}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <BedIcon sx={{ marginRight: '8px' }} />
          <Typography variant="body2">{property.bedrooms} Bedrooms</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <BathtubIcon sx={{ marginRight: '8px' }} />
          <Typography variant="body2">{property.bathrooms} Bathrooms</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="body2" sx={{ marginRight: '8px' }}>Amenities:</Typography>
          <Typography variant="body2">{property.amenities.join(', ')}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <StarIcon sx={{ marginRight: '8px', color: '#FFD700' }} />
          <Typography variant="body2">{property.rating} ({property.reviews} Reviews)</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Button 
            onClick={() => addToCart(property)} 
            variant="contained" 
            color="primary"
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
            Book Now
        </Button>
      </MotionCardContent>
    </MotionCard>
  );
}

export default PropertyCard;
