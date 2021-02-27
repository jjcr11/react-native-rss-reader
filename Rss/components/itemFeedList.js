import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/itemFeedListStyles';
import {Card} from 'react-native-elements';
import colors from '../styles/colors';

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
    return (
      <Card containerStyle={{backgroundColor: colors.white}}>
        <View>
          <TouchableOpacity
            onPress={() =>
              this.state.navigation.navigate('New', {
                allFeed: this.state.allFeed,
                index: this.state.index,
              })
            }>
            <Text style={styles.text}>{this.state.title}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default ItemFeedList;
