import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { HalfCircleSpinner } from 'react-epic-spinners';
import { styled } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        maxWidth: 600,
        margin: '0 auto',
        marginTop: '20px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    cardcontent: {

    },
    header: {
      alignItems: 'center',
      maxWidth: 500,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

const Header = styled(Typography)({

})

export default function SearchResults(props) {
    const classes = useStyles(); 

    return(
        <Card className={classes.card}>
            <CardContent>
                <Header >
                    Your house is valued at:
                </Header>
                <br/>
                <Typography className={classes.header} variant="h2" component="h2">
                    <div>
                        {props.zEstimate ? 
                        <NumberFormat 
                            value={props.zEstimate} 
                            thousandSeparator={true} 
                            prefix='$' 
                            displayType={'text'}
                        /> :
                        <HalfCircleSpinner 
                            color={'#3f51b5'}
                        />} 
                    </div>
                </Typography>
                    
                    
                <br/>
                <Typography>
                    (as of: {props.asOf})
                </Typography>



                <Button variant="contained" color="primary" component={Link} to="/MVP-selectors" className={classes.button}>
                    Let's Renovate!
                </Button>
            </CardContent>
        </Card>
       
        
    )
}