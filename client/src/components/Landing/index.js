import React from 'react';
import { Link } from 'react-router-dom'
import { MemoryRouter as Router } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/icons/house.png';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'wrap',
  },
  header: {
    alignItems: 'center',
    maxWidth: 500,
  },
  image: {
    margin: '0 auto',
  },
  button: {
    
    margin: theme.spacing(1),
  },
}));

export default function Landing(props) {
  const classes = useStyles(); 

  
  return(
      <div className={classes.root}>
          <Typography className={classes.header} variant="h1" component="h2" gutterBottom>
              RenoMaybe
          </Typography>

          <img src={logo} alt={'logo'} className={classes.image}/>
          
          <Button variant="contained" color="primary" component={Link} to="/search" className={classes.button}>
              Let's Get Started!
          </Button>

          
      </div>
  );
}