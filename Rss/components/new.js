import React from 'react';
import {ScrollView} from 'react-native';
import Swiper from './swiper';

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
