import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class ItemFeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: props.rss,
      navigation: props.navigation,
      datos: props.datos,
      index: props.index,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.state.navigation.navigate('New', {
              rss: this.state.rss,
              datos: this.state.datos,
              index: this.state.index,
            })
          }>
          <Text>{this.state.rss.item.title + '\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemFeedList;
