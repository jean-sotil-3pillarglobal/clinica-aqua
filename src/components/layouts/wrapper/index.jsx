
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
  Fade,
  withStyles,
} from '@material-ui/core';

import Loading from '../../commons/preloader';

const styles = () => ({
  container: {},
  hide: {
    display: 'none',
  },
});

const MainWrapper = (props: {
  classes: Object,
  loading: Boolean,
}) => {
  const { classes, loading } = props;

  return (
    <Fragment>
      <Loading show={loading} />
      <Fade in={!loading}>
        <div className={classnames(loading && classes.hide)}>
          {props.children}
        </div>
      </Fade>
    </Fragment>
  );
};

// map state to props
function mapStateToProps (state) {
  return {
    loading: state.loading,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(MainWrapper));