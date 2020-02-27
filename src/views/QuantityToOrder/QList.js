import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { MaterialTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const QList = () => {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <MaterialTable/>
      </div>
    </div>
  );
};

export default QList;
