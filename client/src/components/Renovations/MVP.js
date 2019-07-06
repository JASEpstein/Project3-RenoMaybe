import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import RenoData from '../../data/National.js/index.js';

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
    category: '',
    quality:'',
  });
  const [filter, setFilter] = React.useState({
      filterArray: [],
  })

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

  function filterByRoom(event) {
    const RenoDataFilter = RenoData.filter(item => {
        return item.Category === values.category
        })
    const filterArrayUpdate = {filterArray : RenoDataFilter}
    setFilter(filterArrayUpdate)
    console.log(filter.filterArray);
  }

  function filterByQuality(event) {
    values.filterArray = values.filterArray.filter(item => {
        return item.Quality === values.quality
    })
  }

  function renderTypeSelections() {
      if(values.filterArray){
        values.filterArray.map(element => {
            return document.getElementById('typeSelectorBox').appendChild(`<MenuItem value={element.Project}>{element.Project}</MenuItem>`)
        })
      } else {
          return 
      }
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category">Room</InputLabel>
        <Select
          value={values.category}
          onChange={(e) => {handleChange(e); filterByRoom(e) }}
          inputProps={{
            name: 'category',
            id: 'category',
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
          onChange={(e) => {handleChange(e); filterByQuality(e)}}
          inputProps={{
            name: 'quality',
            id: 'quality',
          }}
        >
        <MenuItem value="Midrange">$$</MenuItem>
        <MenuItem value="Upscale">$$$</MenuItem>
        </Select>
      </FormControl>

      <FormControl id={'typeSelectBox'} className={classes.formControl}>
        <InputLabel htmlFor="project">Type</InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          inputProps={{
            name: 'project',
            id: 'project',
          }}
        >
        {filter.filterArray.map(element => {
            return <MenuItem value={element.Project}>{element.Project}</MenuItem> 
        })}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </form>
  );
}