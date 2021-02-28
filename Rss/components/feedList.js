import React from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import ItemFeedList from './itemFeedList';
import styles from '../styles/feedListStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={(item) => (
              <ItemFeedList
                allFeed={this.state.data}
                title={item.item.title}
                date={item.item.published}
                //rss={item}
                index={item.index}
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
