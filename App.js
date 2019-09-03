/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Text} from 'react-native';

class App extends React.Component {
  state = {isMounted: false};

  async componentDidMount() {
    await Promise.resolve(1);
    this.setState({isMounted: true});
  }

  render() {
    if (this.state.isMounted) {
      this.state.isMounted.test();
    }
    return (
      <Fragment>
        <Text>test</Text>
      </Fragment>
    );
  }
}

export default App;
