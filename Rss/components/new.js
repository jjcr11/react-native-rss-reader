import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  VirtualizedList,
} from 'react-native';
import {Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');

class ItemNewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      index2: props.index2,
    };
  }
  render() {
    return <WebView source={{html: this.state.content}} />;
  }
}

class New extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      allFeed: props.route.params.allFeed,
      index: props.route.params.index,
    };
  }
  previousPage() {
    this.setState({index: this.state.index - 1});
    console.log(this.state.index);
  }
  nextPage() {
    this.setState({index: this.state.index + 1});
    console.log(this.state.index);
  }
  render() {
    return (
      <View>
        <FlatList
          snapToInterval={0}
          disableIntervalMomentum={true}
          scroll
          decelerationRate={'fast'}
          scrollEnabled={false}
          horizontal={true}
          contentOffset={{x: width * this.state.index, y: 0}}
          initialNumToRender={this.state.allFeed.length}
          data={this.state.allFeed}
          renderItem={(item) => (
            <View style={{width: width, height: height * 0.7}}>
              <ItemNewList content={item.item.description} />
              <View
                style={{
                  backgroundColor: 'red',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={this.previousPage}>
                  <Text>Previus page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.nextPage}>
                  <Text>Next page</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default New;
