import React from 'react';
import classNames from 'classnames';

import theme from './theme.scss';

type AppProps = {
  className: string;
};
class App extends React.Component<AppProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <div className={classNames(theme.wrapper, this.props.className)}>{this.props.children}</div>
    );
  }
}

export default App;
