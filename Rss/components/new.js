import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Swiper = ({array, index}) => {
  return (
    <View>
      <ScrollView
        snapToInterval={width}
        decelerationRate="fast"
        horizontal
        contentOffset={{x: width * index, y: 0}}>
        {array.map((source) => (
          <View key={source.description} style={{width: width, height: height}}>
            <HTMLView value={source.description} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: props.route.params.rss,
      datos: props.route.params.datos,
      index: props.route.params.index,
    };
  }
  render() {
    return (
      <ScrollView>
        <Swiper array={this.state.datos} index={this.state.index} />
      </ScrollView>
    );
  }
}

export default New;
