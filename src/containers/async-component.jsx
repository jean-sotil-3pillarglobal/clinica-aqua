import React, { Component } from 'react';

import Header from '../components/header';
import Loading from '../components/commons/preloader';
import ScrollToTopButton from '../components/commons/scrollToTopButton';
import ScrollToTopOnMount from '../components/commons/scrollToTopOnMount';
import MainWrapper from '../components/layouts/wrapper';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    }

    componentDidMount = () => {
      importComponent()
        .then((cmp) => {
          this.setState({ component: cmp.default });
        });
    }

    render = () => {
      const C = this.state.component;
      return C ? (
        <MainWrapper>
          <Header {...this.props} />
          <C {...this.props} />
          <ScrollToTopOnMount />
          <ScrollToTopButton />
        </MainWrapper>
      ) : <Loading show />;
    }
  };
};

export default asyncComponent;
