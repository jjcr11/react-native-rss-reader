import React from 'react';
import {ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {Dimensions} from 'react-native';
// import HTMLView from 'react-native-htmlview';
import ViewPager from '@react-native-community/viewpager';
import { WebView } from 'react-native-webview';

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
      <View style={{width: width, height: height, backgroundColor: '#fff'}}>
        <ScrollView style={{width: width, minHeight: height, flex: 1}}>
            {/* <HTMLView value={this.state.content} /> */}
            <WebView
              originWhitelist={['*']}
              source={{ html: this.state.content
                             }}
              style={{height: height}}
              contentMode='mobile'
              textZoom={400}
            />
        </ScrollView>
      </View>
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
        <ViewPager initialPage={this.state.index} >
        
          {/* <View style={{backgroundColor:'#000', height: height, width: width}}/>
          <View style={{backgroundColor:'#000', height: height, width: width}}/>
          <View style={{backgroundColor:'#000', height: height, width: width}}/> */}
          {
            this.state.allFeed.map( (item, index)=> <ItemNewList
              key={index}
              content={ String(item.content).length > String(item.description).length ? item.content : item.description }
              index={item.index}
            />
            )
          }
        </ViewPager>
        {/* <FlatList
          snapToInterval={width}
          decelerationRate={'fast'}
          horizontal={true}
          contentOffset={{x: width * this.state.index, y: 0}}
          windowSize={3}
          data={this.state.allFeed}
          renderItem={(item) => (
            <ItemNewList
              content={ String(this.state.content).length > String(this.state.description).length ? item.item.content : item.item.description }
              index={this.state.index}
            />
          )}
        /> */}
      </View>
    );
  }
}

export default New;
