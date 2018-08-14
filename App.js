/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native';
import RenderItem from './RenderItem';

export default class App extends Component{
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
          data:{}
      };
    }

    componentDidMount() {
        this.setState({
            data:{'name':'小名','age':'18','sex':'男','education':'高中'}
        })
    }
    render() {
    return (
      <RenderItem info={this.state.data}
      />
    );
  }
}

