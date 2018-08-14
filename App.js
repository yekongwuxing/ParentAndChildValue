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
          data:[]
      };
    }

    componentDidMount() {
        this.setState({
            data:[{'name':'小名','age':'18','sex':'男','education':'高中'},
                {'name':'小明','age':'18','sex':'男','education':'高中'},
                {'name':'小花','age':'18','sex':'女','education':'高中'}]
        })
    }
    _renderItem = ({item}) => {
        return(
            <RenderItem info={item}/>
        )
    }
    _keyExtractor = (item,index) => {
        return index
    }

    render() {
        return (
            <FlatList style={{flex:1}}
                      data={this.state.data}
                      renderItem={this._renderItem}
                      keyExtractor={this._keyExtractor}
            />

    );
  }
}

const styles = StyleSheet.create({

    container:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: '#e5e5e5',
        backgroundColor: 'white',
    },
    txt:{
        fontSize:15,
        paddingHorizontal:20,
        color:'red'
    }

});
