import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { ProjectDetails } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const AddProject = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={4}
            >
                <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                >
                    <ProjectDetails />
                </Grid>
            </Grid>
        </div>
    );
};

export default AddProject;
