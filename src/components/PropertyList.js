import React, { useState } from 'react';
import { Grid } from '@mui/material';
import PropertyCard from './PropertyCard';

function PropertyList({ properties, addToCart }) {

  return (
    <Grid container spacing={2}>
      {properties.map(property => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertyCard property={property} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PropertyList;
