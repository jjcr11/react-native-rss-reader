import React from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import ItemFeedList from './itemFeedList';
import styles from '../styles/feedListStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    fetch('http://192.168.0.16:8000/update/')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        fetch('http://192.168.0.16:8000/feed/')
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              loading: false,
              data: data,
            });
            //console.log(data[0]);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
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
                //allFeed={this.state.data}
                title={item.item.title}
                date={item.item.published}
                content={item.item.content}
                link={item.item.link}
                //rss={item}
                //index={item.index}
                navigation={this.state.navigation}
                //datos={this.state.data}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
  }
}

export default FeedList;
