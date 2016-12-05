import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const menu = [
      {
        url: '/form1',
        title: 'Форма 1',
      },
      {
        url: '/form2',
        title: 'Форма 2',
      },
    ];

    return (
      <div>
        <Helmet {...config.app.head} />
        <div className="container">
          <Header menu={menu} />
        </div>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
