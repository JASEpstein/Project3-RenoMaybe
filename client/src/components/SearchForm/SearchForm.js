import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    minWidth: 275,
    maxWidth: 600,
    margin: '0 auto',
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

// const stateAbbreviations = [
//   {
//       label: "Alabama",
//       value: "AL"
//   },
//   {
//       label: "Alaska",
//       value: "AK"
//   },
//   {
//       label: "Arizona",
//       value: "AZ"
//   },
//   {
//       label: "Arkansas",
//       value: "AR"
//   },
//   {
//       label: "California",
//       value: "CA"
//   },
//   {
//       label: "Colorado",
//       value: "CO"
//   },
//   {
//       label: "Connecticut",
//       value: "CT"
//   },
//   {
//       label: "Delaware",
//       value: "DE"
//   },
//   {
//       label: "District Of Columbia",
//       value: "DC"
//   },
//   {
//       label: "Florida",
//       value: "FL"
//   },
//   {
//       label: "Georgia",
//       value: "GA"
//   },
//   {
//       label: "Hawaii",
//       value: "HI"
//   },
//   {
//       label: "Idaho",
//       value: "ID"
//   },
//   {
//       label: "Illinois",
//       value: "IL"
//   },
//   {
//       label: "Indiana",
//       value: "IN"
//   },
//   {
//       label: "Iowa",
//       value: "IA"
//   },
//   {
//       label: "Kansas",
//       value: "KS"
//   },
//   {
//       label: "Kentucky",
//       value: "KY"
//   },
//   {
//       label: "Louisiana",
//       value: "LA"
//   },
//   {
//       label: "Maine",
//       value: "ME"
//   },
//   {
//       label: "Maryland",
//       value: "MD"
//   },
//   {
//       label: "Massachusetts",
//       value: "MA"
//   },
//   {
//       label: "Michigan",
//       value: "MI"
//   },
//   {
//       label: "Minnesota",
//       value: "MN"
//   },
//   {
//       label: "Mississippi",
//       value: "MS"
//   },
//   {
//       label: "Missouri",
//       value: "MO"
//   },
//   {
//       label: "Montana",
//       value: "MT"
//   },
//   {
//       label: "Nebraska",
//       value: "NE"
//   },
//   {
//       label: "Nevada",
//       value: "NV"
//   },
//   {
//       label: "New Hampshire",
//       value: "NH"
//   },
//   {
//       label: "New Jersey",
//       value: "NJ"
//   },
//   {
//       label: "New Mexico",
//       value: "NM"
//   },
//   {
//       label: "New York",
//       value: "NY"
//   },
//   {
//       label: "North Carolina",
//       value: "NC"
//   },
//   {
//       label: "North Dakota",
//       value: "ND"
//   },
//   {
//       label: "Ohio",
//       value: "OH"
//   },
//   {
//       label: "Oklahoma",
//       value: "OK"
//   },
//   {
//       label: "Oregon",
//       value: "OR"
//   },
//   {
//       label: "Pennsylvania",
//       value: "PA"
//   },
//   {
//       label: "Puerto Rico",
//       value: "PR"
//   },
//   {
//       label: "Rhode Island",
//       value: "RI"
//   },
//   {
//       label: "South Carolina",
//       value: "SC"
//   },
//   {
//       label: "South Dakota",
//       value: "SD"
//   },
//   {
//       label: "Tennessee",
//       value: "TN"
//   },
//   {
//       label: "Texas",
//       value: "TX"
//   },
//   {
//       label: "Utah",
//       value: "UT"
//   },
//   {
//       label: "Vermont",
//       value: "VT"
//   },
//   {
//       label: "Virginia",
//       value: "VA"
//   },
//   {
//       label: "Washington",
//       value: "WA"
//   },
//   {
//       label: "West Virginia",
//       value: "WV"
//   },
//   {
//       label: "Wisconsin",
//       value: "WI"
//   },
//   {
//       label: "Wyoming",
//       value: "WY"
//   }
// ]

export default function TextFields({zillowRequest, formInput, handleChange}) {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   address: '',
  //   zip: '',
  // });

 
  

  return (
  <Card className={classes.card}>
    <CardContent>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            label="Address"
            className={classes.textField}
            placeholder="Enter Street Address"
            value={formInput.formAddress}
            onChange={e => handleChange(e, 'formAddress')}
            helperText="Ex: 123 Main St."
            margin="normal"
          />
        </Grid>

        {/* <Grid item xs={12}>
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
        </Grid> */}
        
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            label="Zip"
            className={classes.textField}
            placeholder="Zip"
            value={formInput.formZip}
            onChange={e => handleChange(e, 'formZip')}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12}>
          <Button component={Link} to="/search-results" onClick={(e) => {zillowRequest(e)}} variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </Grid>
      </Grid>
      </form>    
    </CardContent>
  </Card>
     
    
    
  );
}