import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'; // eslint-disable-line
import cssmodules from 'react-css-modules';

import style from './styles.styl';

@cssmodules(style)
export default class Header extends Component {
  static propTypes = {
    /**
     * Пункты меню
     */
    menu: PropTypes.array,
    /**
     * Пользователь
     */
    user: PropTypes.object,
  }

  static defaultProps = {
    menu: [],
  }

  render() {
    const { menu, user } = this.props;

    return (
      <div styleName="nav">
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-collapse">
              <ul className="nav navbar-nav">
                {menu.map((item, index) => (
                  <li key={index}><Link to={item.url}>{item.title}</Link></li>
                ))}
              </ul>

              <div styleName="user_block" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
