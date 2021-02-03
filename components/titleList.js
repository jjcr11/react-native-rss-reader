import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import Item from './item';

class TitleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      navigation: props.navigation,
    };
  }
  getData() {
    //fetch('http://feeds.weblogssl.com/xatakamx')
    fetch('https://kotaku.com/rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        this.setState({
          data: rss.items,
          loading: false,
        });
      });
  }
  render() {
    const renderItem = ({item}) => (
      <Item rss={item} navigation={this.state.navigation} />
    );
    this.getData();
    if (this.state.loading) {
      return <Text>CARGANDO</Text>;
    } else {
      return (
        <View style={{flex: 1, padding: 24}}>
          <FlatList data={this.state.data} renderItem={renderItem} />
        </View>
      );
    }
  }
}

export default TitleList;
