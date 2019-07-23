import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/icons/house.png';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import { styled } from '@material-ui/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'inline-flex',
//     flexWrap: 'wrap',
//   },
//   header: {
//     alignItems: 'center',
//     maxWidth: 500,
//   },
//   image: {
//     display: 'inline-flex',
//     flexWrap: 'wrap',
//     margin: '0 auto',
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const Title = styled(Typography)({
  fontSize: '40px',
  alignSelf: 'center',
  margin: '10px',
})

const StartButton = styled(Button)({
  color: 'white',
  maxWidth: '200px',
  border: '0',
  margin: '0 auto',
  padding: '20px 40px',
  background: 'linear-gradient(to right, #3f51b5, #8bd7f7)',
  borderRadius: '3px',
  verticalAlign: 'middle',
  textDecoration: 'none',
  fontWeight: 'bold',
})



export default function Landing(props) {
  // const classes = useStyles(); 

  
  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <img 
        style={{alignSelf: 'center', margin: '15px' }} 
        src={logo} 
        alt={'logo'}
      />
      
      <Title>
        RenoMaybe
      </Title>

      <StartButton 
        variant="contained" 
        component={Link} 
        to="/search">
          Let's Get Started!
      </StartButton>

    </div>
  );
}