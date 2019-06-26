import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import { Block } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import keys from '../../config/reactKeys'
import convert from 'xml-js';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,

  },
  menu: {
    width: 200,
  },
  form: {
    alignItems: "center"
  }
}));

const stateAbbreviations = [
  {
      label: "Alabama",
      value: "AL"
  },
  {
      label: "Alaska",
      value: "AK"
  },
  {
      label: "Arizona",
      value: "AZ"
  },
  {
      label: "Arkansas",
      value: "AR"
  },
  {
      label: "California",
      value: "CA"
  },
  {
      label: "Colorado",
      value: "CO"
  },
  {
      label: "Connecticut",
      value: "CT"
  },
  {
      label: "Delaware",
      value: "DE"
  },
  {
      label: "District Of Columbia",
      value: "DC"
  },
  {
      label: "Florida",
      value: "FL"
  },
  {
      label: "Georgia",
      value: "GA"
  },
  {
      label: "Hawaii",
      value: "HI"
  },
  {
      label: "Idaho",
      value: "ID"
  },
  {
      label: "Illinois",
      value: "IL"
  },
  {
      label: "Indiana",
      value: "IN"
  },
  {
      label: "Iowa",
      value: "IA"
  },
  {
      label: "Kansas",
      value: "KS"
  },
  {
      label: "Kentucky",
      value: "KY"
  },
  {
      label: "Louisiana",
      value: "LA"
  },
  {
      label: "Maine",
      value: "ME"
  },
  {
      label: "Maryland",
      value: "MD"
  },
  {
      label: "Massachusetts",
      value: "MA"
  },
  {
      label: "Michigan",
      value: "MI"
  },
  {
      label: "Minnesota",
      value: "MN"
  },
  {
      label: "Mississippi",
      value: "MS"
  },
  {
      label: "Missouri",
      value: "MO"
  },
  {
      label: "Montana",
      value: "MT"
  },
  {
      label: "Nebraska",
      value: "NE"
  },
  {
      label: "Nevada",
      value: "NV"
  },
  {
      label: "New Hampshire",
      value: "NH"
  },
  {
      label: "New Jersey",
      value: "NJ"
  },
  {
      label: "New Mexico",
      value: "NM"
  },
  {
      label: "New York",
      value: "NY"
  },
  {
      label: "North Carolina",
      value: "NC"
  },
  {
      label: "North Dakota",
      value: "ND"
  },
  {
      label: "Ohio",
      value: "OH"
  },
  {
      label: "Oklahoma",
      value: "OK"
  },
  {
      label: "Oregon",
      value: "OR"
  },
  {
      label: "Pennsylvania",
      value: "PA"
  },
  {
      label: "Puerto Rico",
      value: "PR"
  },
  {
      label: "Rhode Island",
      value: "RI"
  },
  {
      label: "South Carolina",
      value: "SC"
  },
  {
      label: "South Dakota",
      value: "SD"
  },
  {
      label: "Tennessee",
      value: "TN"
  },
  {
      label: "Texas",
      value: "TX"
  },
  {
      label: "Utah",
      value: "UT"
  },
  {
      label: "Vermont",
      value: "VT"
  },
  {
      label: "Virginia",
      value: "VA"
  },
  {
      label: "Washington",
      value: "WA"
  },
  {
      label: "West Virginia",
      value: "WV"
  },
  {
      label: "Wisconsin",
      value: "WI"
  },
  {
      label: "Wyoming",
      value: "WY"
  }
]

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const zillowRequest = (e) => {
    e.preventDefault();
    const proxyURL = 'https://peaceful-island-88132.herokuapp.com/'
    Axios({
      method: 'post',
      url: proxyURL + 'http://www.zillow.com/webservice/GetSearchResults.htm',
      params: {
        'zws-id': keys.ZillowAPIKey,
        'citystatezip': values.zip,
        'address': values.address
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then((response) => {
      const resJSON = convert.xml2js(response.data, {compact: false, spaces: 4});
      const zEstimate = resJSON.elements[0].elements[2].elements[0].elements[0].elements[3].elements[0].elements[0].text
      console.log(zEstimate);
    })
    
      
  }

  return (
      <form className={classes.container+' ignore-css'} noValidate autoComplete="off">
      <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="address"
          label="Address"
          className={classes.textField}
          placeholder="Enter Street Address"
          value={values.address}
          onChange={handleChange('address')}
          helperText="Ex: 123 Main St."
          margin="normal"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          id="city"
          label="City"
          className={classes.textField}
          placeholder="City"
          value={values.city}
          onChange={handleChange('city')}
          margin="normal"
        />
      </Grid>
    
      <Grid item xs={12}>
        <TextField
          required
          id="state-select"
          select
          label="State"
          className={classes.textField}
          value={values.state}
          onChange={handleChange('state')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {stateAbbreviations.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          required
          id="zipcode"
          label="Zip"
          className={classes.textField}
          placeholder="Zip"
          value={values.zip}
          onChange={handleChange('zip')}
          margin="normal"
        />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={zillowRequest} variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </Grid>
    </Grid>
    </form>
    
    
  );
}