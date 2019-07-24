import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import NumberFormat from 'react-number-format';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import RenoData from '../../data/National.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    minWidth: 275,
    maxWidth: 900,
    width: 800,
    margin: '0 auto',
    marginTop: '20px',
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

export default function SimpleSelect({zEstimate, renoChoices, handleChangeReno}) {
  const classes = useStyles();
  
  const [values, setValues] = useState({
    category: '',
    quality:'',
    project: '',
  });

  const [finalValue, setFinalValue] = useState({
      value: '',
  })

  const [renoChoiceTotals, setRenoChoiceTotals] = useState({
      total: '',
  })

  const [runningTotal, setRunningTotal] = useState({
      total: zEstimate,
  })

  function test() {
      console.log(finalValue.value);
      console.log(zEstimate);
  }
//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

  function addTotals(event) {
    setRunningTotal(total => total + renoChoiceTotals.total)
  }

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function updateFinal(resultObj2) {
    setFinalValue(oldValues => ({
        ...oldValues, 
        value: resultObj2[0].ResaleValue}))

  }

//   function filterByRoom(event) {
//     const RenoDataFilter = RenoData.filter(item => {
//         return item.Category === values.category
//         })
//     const filterArrayUpdate = {filterArray : RenoDataFilter}
//     setFilter(filterArrayUpdate)
//     console.log(filter.filterArray);
//   }

//   function filterByQuality(event) {
//     values.filterArray = values.filterArray.filter(item => {
//         return item.Quality === values.quality
//     })
//   }

//   function renderTypeSelections() {
//       if(values.filterArray){
//         values.filterArray.map(element => {
//             return document.getElementById('typeSelectorBox').appendChild(`<MenuItem value={element.Project}>{element.Project}</MenuItem>`)
//         })
//       } else {
//           return 
//       }
//   }

  function submitSelection(event) {
    const resultObj = RenoData.filter(element => {
        return element.Project === values.project
    })
    const resultObj2 = resultObj.filter(element => {
        return element.Quality === values.quality
    })
    updateFinal(resultObj2);
  }

  function addValues(zEstimate) {
    const zInt = parseInt(zEstimate);
    const valueInt = parseInt(finalValue.value);
    if(!zInt){
        return valueInt
    } else {
        return valueInt + zInt;
    }
  }
//   function calculateNewValue(props) {
//     return props.zillowData
//   }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} variant="h2" component="h2">
                    Your house value is: 
                <br/>
                
                <NumberFormat value={runningTotal.value} thousandSeparator={true} prefix='$' displayType={'text'}/>
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardContent>
                <form className={classes.root} autoComplete="off">
                    <FormControl id={'typeSelectBox'} className={classes.formControl}>
                <InputLabel htmlFor="project">Select</InputLabel>
                <Select
                value={values.project}
                onChange={handleChange}
                inputProps={{
                    name: 'project',
                    id: 'project',
                }}
                >
                {RenoData.map(element => {
                    return <MenuItem value={element.Project}>{element.Project}</MenuItem> 
                })}
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

                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={(e) => {submitSelection(e)}} 
                        className={classes.button}>
                        Submit
                    </Button>
                    {/* component={Link} to="/final-results" */}

                    {/* <Button variant="contained" color="primary" onClick={test} className={classes.button}>
                        Test
                    </Button> */}
                </form>
            </CardContent>
        </Card>



    </div>
   
  );
}