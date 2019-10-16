import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

@themr('GlobalWrapper', defaultTheme)
class App extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <div className={classNames(this.props.theme.wrapper, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
