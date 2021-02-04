import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class ItemFeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dato: props.rss,
      navigation: props.navigation,
      datos: props.datos,
    };
    //console.log(this.state.datos[0]);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.state.navigation.navigate('New', {
              rss: this.state.dato,
              datos: this.state.datos,
            })
          }>
          <Text>{this.state.dato.title + '\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ItemFeedList;
