import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import { Link } from 'react-router-dom';



const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    siteLocation: 'Shen',
    clientName: 'Zhi',
    projengr: 'Engr. Ethan Mojares',
    directcost : '10000000',
    projtype : 'Horizontal Project',
    phase1 : 'Alabama',
    phase1weight: 'USA',
    phase2: 'Alabama',
    phase2weight: 'USA',
    phase3: 'Alabama',
    phase3weight: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const projtype = [
    {
      value: 'horizontal',
      label: 'Horizontal Project'
    },
    {
      value: 'vertical',
      label: 'Vertical Project'
    }
  ];

  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Input project details."
          title="Project Details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Site Location"
                margin="dense"
                name="SiteLocation"
                onChange={handleChange}
                required
                value={values.siteLocation}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Client Name"
                margin="dense"
                name="ClientName"
                onChange={handleChange}
                required
                value={values.clientName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Project Type"
                margin="dense"
                name="ProjectType"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.projtype}
                variant="outlined"
              >
                {projtype.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Project Engineer"
                margin="dense"
                name="ProjectEngineer"
                onChange={handleChange}
                required
                value={values.projengr}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <TextField
                id="projstart"
                label="Start of Project"
                type="date"
                defaultValue="2020-02-02"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                id="projend"
                label="Projected End of Project"
                type="date"
                defaultValue="2020-02-02"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Divider />
            <CardHeader
              subheader="Input project cost."
              title="Project Costing"
            />
            <Divider />
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Estimated Cost"
                margin="dense"
                name="DirectCost"
                onChange={handleChange}
                required
                value={values.directcost}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 1"
                margin="dense"
                name="Phase1"
                onChange={handleChange}
                required
                value={values.phase1}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 1 Weight"
                margin="dense"
                name="Phase1Weight"
                onChange={handleChange}
                required
                value={values.phase1weight}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 2"
                margin="dense"
                name="Phase2"
                onChange={handleChange}
                required
                value={values.phase2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 2 Weight"
                margin="dense"
                name="Phase2Weight"
                onChange={handleChange}
                required
                value={values.phase2weight}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 3"
                margin="dense"
                name="Phase3"
                onChange={handleChange}
                required
                value={values.phase3}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phase 3 Weight"
                margin="dense"
                name="Phase3Weight"
                onChange={handleChange}
                required
                value={values.phase3weight}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            component={Link} to="/dashboard"
          >
            Add Project
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

ProjectDetails.propTypes = {
  className: PropTypes.string
};

export default ProjectDetails;
