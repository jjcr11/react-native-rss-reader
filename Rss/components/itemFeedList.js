import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class ItemFeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFeed: props.allFeed,
      navigation: props.navigation,
      // title: props.title,
      index: props.index,
      // item: props.item
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => 
            this.props.navigation.navigate('New', {
              allFeed: this.state.allFeed,
              index: this.state.index,
            })
          }>
          <Text>{this.state.allFeed[this.state.index].title + '\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemFeedList;
