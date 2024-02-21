import React from 'react';
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';


export default function Sidebar() {
  return (
    <div>
      <Container sx={{
        position: 'relative',
        p:2, 
 
        width: 40, 
        height: 200, 
        marginLeft: '2',
        marginRight: '2', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
        }}>

          <IconButton
              size = 'large'
              edge = 'start'
              color = 'black'
              aria-label = 'menu'
              sx={{ 
                position: 'absolute', 
                top: 0, 
                 }}
              
            >
          <MenuIcon />
        </IconButton>
      </Container>
      
    </div>
  );
}