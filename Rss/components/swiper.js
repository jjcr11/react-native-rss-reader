import React from 'react';
import {View, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: props.array,
      index: props.index,
    };
  }
  render() {
    return (
      <View>
        <ScrollView
          snapToInterval={width}
          decelerationRate="fast"
          horizontal
          contentOffset={{x: width * this.state.index, y: 0}}
          showsHorizontalScrollIndicator={false}>
          {this.state.array.map((source) => (
            <View style={{width: width, height: height}}>
              {String(source.content).length >
              String(source.description).length ? (
                <HTMLView value={source.content} />
              ) : (
                <HTMLView value={source.description} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
/*
<View
              key={source.description}
              style={{width: width, height: height}}>
              <HTMLView value={source.content} />
            </View>
*/

export default Swiper;
