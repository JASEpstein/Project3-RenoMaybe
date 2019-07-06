import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        maxWidth: 600,
        margin: '0 auto',
    },
    header: {
      alignItems: 'center',
      maxWidth: 500,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function SearchResults(props) {
    const classes = useStyles(); 

    function calculateNewValue () {
        console.log(props.zillowData)
        console.log(props.RenoChoices);
        return props.zillowData + props.RenoChoices.renoValue
    }

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} variant="h2" component="h2">
                    Your new house value is: 
                    <br/>
                    
                    {/* <NumberFormat value={calculateNewValue} thousandSeparator={true} prefix='$' displayType={'text'}/> */}
                </Typography>



                <Button variant="contained" color="primary" component={Link} to="/MVP-selectors" className={classes.button}>
                    Add More
                </Button>
            </CardContent>
        </Card>
       
        
    )
}