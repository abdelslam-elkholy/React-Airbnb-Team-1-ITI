import React from 'react';
import Typography from '@mui/material/Typography';
// react icons
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../../Themes/commonStyles';
import { pink } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AirBnbLogo from './airbnb-logo'

export default function Logo() {
  return (
    <a className='cursor-pointer'>
    <Container >
    <Box sx={{...flexCenter ,justifyContent: 'flex-start',marginLeft:0}}>
      <AirBnbLogo size={40} color='#FF385C'/>
    </Box>
    </Container>
    </a>
  );
}
