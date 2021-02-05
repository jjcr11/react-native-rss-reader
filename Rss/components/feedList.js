import React from 'react';
import {FlatList, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import ItemFeedList from './itemFeedList';

const json = [
  {
    link: 'https://www.mientrastantoenmexico.mx/feed/',
  },
  {
    link: 'https://kotaku.com/rss',
  },
  {
    link: 'http://feeds.weblogssl.com/xatakamx',
  },
];

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
    json.forEach((link, index) => {
      console.log(link);
      fetch(link.link)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
          this.setState({
            data: this.state.data.concat(rss.items),
            loading: false,
          });
        });
    });

    /*
    fetch('https://kotaku.com/rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        this.setState({
          data: rss.items,
          loading: false,
        });
      });
      */
  }
  render() {
    if (this.state.loading) {
      this.getData();
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
