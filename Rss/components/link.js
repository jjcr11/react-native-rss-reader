import React from 'react';
import {View, Text, TextInput} from 'react-native';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Useless Placeholder',
    };
  }
  render() {
    return (
      <View>
        <Text>Link:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => onChangeText(text)}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default Link;
