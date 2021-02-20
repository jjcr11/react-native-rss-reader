import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class ItemFeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFeed: props.allFeed,
      navigation: props.navigation,
      title: props.title,
      index: props.index,
    };
  }
  render() {
    //console.log(this.state.allFeed);
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.state.navigation.navigate('New', {
              allFeed: this.state.allFeed,
              index: this.state.index,
            })
          }>
          <Text>{this.state.title + '\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemFeedList;
