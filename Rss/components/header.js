import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/headerStyles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  render() {
    return (
      <View style={styles.continer}>
        <Text style={styles.text}>{this.state.name}</Text>
      </View>
    );
  }
}

export default Header;
