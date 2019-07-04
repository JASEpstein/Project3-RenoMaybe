import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    card: {
        maxWidth: 300,
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },    
    
})
)
export default function Step1() {
    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.container}>
          <Grid container alignItems='center' justify='center' spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Card className={classes.card}>
                    <ButtonBase className={classes.cardButton}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                        Lizard
                        </Typography>
                        
                    </CardContent>
                    </ButtonBase>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                    <ButtonBase className={classes.cardButton}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                        Lizard
                        </Typography>
                        
                    </CardContent>
                    </ButtonBase>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <ButtonBase className={classes.cardButton}>
                    <CardContent>
                        <Typography variant="headline" component="h1">
                        Lizard
                        </Typography>
                    </CardContent>
                    </ButtonBase>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <ButtonBase className={classes.cardButton}>
                    <CardContent>
                        <Typography variant="headline" component="h1">
                        Lizard
                        </Typography>
                    </CardContent>
                    </ButtonBase>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Container>

    )

}


