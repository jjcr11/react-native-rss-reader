import React from 'react';
import {FlatList, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import ItemFeedList from './itemFeedList';

class FeedList extends React.Component {
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
    this.getData();
    if (this.state.loading) {
      return <Text>CARGANDO</Text>;
    } else {
      return (
        <View style={{flex: 1, padding: 24}}>
          <FlatList
            data={this.state.data}
            renderItem={(item) => (
              <ItemFeedList
                rss={item}
                index={item.index}
                navigation={this.state.navigation}
                datos={this.state.data}
              />
            )}
          />
        </View>
      );
    }
  }
}

export default FeedList;
