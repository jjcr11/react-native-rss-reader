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

  componentDidMount() {
    this.getData();
  }

  getData() {
    json.forEach((link) => {
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
  }
  
  render() {
    if (this.state.loading) {
      return <Text>CARGANDO</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.data}
            contentContainerStyle={{padding: 24}}
            renderItem={(item) => (
              <ItemFeedList
                allFeed={this.state.data}
                // title={item.item.title}
                //rss={item}
                index={item.index}
                // item={item.item}
                navigation={this.state.navigation}
                //datos={this.state.data}
              />
            )}
          />
        </View>
      );
    }
  }
}

export default FeedList;
