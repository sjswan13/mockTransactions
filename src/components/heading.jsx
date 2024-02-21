import React from 'react';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';



export default function Heading() {
  return (
     <Box component="section" className='box' sx={{ 
      p: 2,  
      border: 'solid purple',
      height: 30, 
      width: 200, 
      marginRight: 4, 
      marginLeft: 4,
      fontSize: 20,  
      }}>
      Dashboard
    </Box>
  );
}