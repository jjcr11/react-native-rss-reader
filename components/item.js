import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dato: props.rss,
      navigation: props.navigation,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.state.navigation.navigate('DetailsScreen', {
              itemId: 86,
              otherParam: 'anything you want here',
              algo: this.state.dato.description,
            })
          }>
          <Text>{this.state.dato.title + '\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Item;
