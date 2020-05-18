
import React, { Fragment } from 'react';

import {
  Dialog,
  DialogContent,
  Typography,
  withStyles,
} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

import ThemeBackground from './../../../providers/utils/theme.background';

const variant = {
  variant: 'primary',
};

const styles = theme => ({
  container: {
    background: 'transparent',
    padding: 0,
  },
  loading: {
    margin: '0 auto',
  },
});

const Loading = (props: {
  classes: Object,
  show: Boolean,
}) => {
  const {
    classes,
    show,
  } = props;

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      className={classes.container}
      disableBackdropClick
      disableEscapeKeyDown
      elevation={0}
      fullWidth
      maxWidth="xs"
      open={show}
    >
      <DialogContent className={classes.container} elevation={0}>
        <CircularProgress className={classes.loading} color="secondary" />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(Loading);
