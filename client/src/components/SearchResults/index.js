import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.header} variant="h2" component="h2">
                    Your house is valued at: 
                    <br/>
                    <NumberFormat value={props.zEstimate} thousandSeparator={true} prefix='$' displayType={'text'}/>
                    <br/>
                    as of: {props.asOf}
                </Typography>



                <Button variant="contained" color="primary" onClick={props.goToNextCard} className={classes.button}>
                    Let's Renovate!
                </Button>
            </CardContent>
        </Card>
       
        
    )
}