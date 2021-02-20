import React from 'react';
import {ScrollView, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview';

const {width, height} = Dimensions.get('window');

class ItemNewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      index: props.index,
    };
  }
  render() {
    return (
      <ScrollView style={{width: width, minHeight: height}}>
        {String(this.state.content).length >
        String(this.state.description).length ? (
          <HTMLView value={this.state.content} />
        ) : (
          <HTMLView value={this.state.description} />
        )}
      </ScrollView>
    );
  }
}

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFeed: props.route.params.allFeed,
      index: props.route.params.index,
    };
  }
  render() {
    return (
      <View>
        <FlatList
          snapToInterval={width}
          decelerationRate={'fast'}
          horizontal={true}
          contentOffset={{x: width * this.state.index, y: 0}}
          windowSize={3}
          data={this.state.allFeed}
          renderItem={(item) => (
            <ItemNewList
              content={item.item.description}
              index={this.state.index}
            />
          )}
        />
      </View>
    );
  }
}

export default New;
