import React, { Fragment } from 'react';
import GettingStartedStyles from './GettingStartedStyles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Grid, Paper, Typography, IconButton, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const GettingStarted = () => {
    const classes = GettingStartedStyles();
    const history = useHistory();

    return (
        <Fragment>
            <div className={classes.paperContainer}>
                <div className={classes.paperFilter}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <div className={classes.cardContainer}>
                                <Typography variant='h3' className={classes.logo}>Workshop</Typography>
                                <Paper className={classes.card}>
                                    <Typography variant='h4' className={classes.cardHeaderText}>Management System</Typography>
                                    <Typography className={classes.cardText}>We make your life easy</Typography>
                                    <div className={classes.button}>
                                        <Button variant="outlined" color="secondary" onClick={() => history.push('/signin')}>Get Started</Button>
                                    </div>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fragment>
    )
};

export default GettingStarted;