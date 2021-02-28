import React from 'react';
import {Text, View, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');

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
  }
  nextPage() {
    this.setState({index: this.state.index + 1});
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
              <WebView source={{html: item.item.description}} textZoom={400} />
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
