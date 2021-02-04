import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Swiper = ({array, rss}) => {
  return (
    <View>
      <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
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
    };
    //console.log(this.state.rss);
  }
  render() {
    return (
      <ScrollView>
        <Swiper array={this.state.datos} rss={this.state.rss} />
      </ScrollView>
    );
  }
}

//<HTMLView value={this.state.rss.description} />
//

export default New;
