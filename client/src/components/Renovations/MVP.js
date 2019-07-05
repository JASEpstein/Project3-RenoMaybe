import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import RenoData from '../../data/National.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    room: '',
    type: '',
    quality:'',
    emptyOrNot: false,
  });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function checkValues(projectItem) {
    
  }

  function renderBoxOptions() {
    if (values.emptyOrNot === true) {
        RenoData.map(projectItem => (
            if(projectItem.Category === values.room && projectItem.Quality === values.quality) {
                setValues({emptyOrNot: true})
                return <MenuItem></MenuItem>
            }
        ))
    
    }
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="room">Room</InputLabel>
        <Select
          value={values.room}
          onChange={handleChange}
          inputProps={{
            name: 'room',
            id: 'room',
          }}
        >
        <MenuItem value="General">General</MenuItem>
        <MenuItem value="Outdoor">Outdoor</MenuItem>
        <MenuItem value="Bedroom">Bedroom</MenuItem>
        <MenuItem value="Bathroom">Bathroom</MenuItem>
        <MenuItem value="Kitchen">Kitchen</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="quality">Quality</InputLabel>
        <Select
          value={values.quality}
          onChange={handleChange}
          inputProps={{
            name: 'quality',
            id: 'quality',
          }}
        >
        
        <MenuItem value="Midrange">$$</MenuItem>
        <MenuItem value="Upscale">$$$</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="project">Type</InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          inputProps={{
            name: 'project',
            id: 'project',
          }}
        >
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </form>
  );
}