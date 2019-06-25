import React from 'react';
//import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));


export default function SearchForm() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CLICK");
  }
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Type Address Here"
          inputProps={{ 'aria-label': 'Type Address Here' }}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
        Search
        <SearchIcon className={classes.rightIcon} />
      </Button>
    </React.Fragment>
    
  );
}