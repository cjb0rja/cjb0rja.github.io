import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { RFTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const RFList = () => {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <RFTable/>
      </div>
    </div>
  );
};

export default RFList;
