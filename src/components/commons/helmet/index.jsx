import Helmet from 'react-helmet';
import React, { Component } from 'react';

import { constants } from '../../../providers/config';

class HeaderHelmet extends Component {
  getValues = (value) => {
    const { proxy } = this.props;
    const { verbiage, language } = proxy;
    const title = verbiage(value)[language] || '';
    return (
      verbiage &&
      language &&
      `${constants.APP_TITLE} | ${title.replace(/(^|\s)\S/g, (l) => {
        return l.toUpperCase();
      })}`
    );
  };

  props: {
    proxy: Object,
  };

  render() {
    const { title, description, keywords, isRaw } = this.props;

    return (
      <Helmet>
        <title>{(isRaw && this.getValues(title)) || title}</title>
        <meta
          name="description"
          content={(isRaw && this.getValues(description)) || description}
        />
        <meta
          name="keywords"
          content={(isRaw && this.getValues(keywords)) || keywords}
        />
      </Helmet>
    );
  }
}

export default HeaderHelmet;
