/*import React from 'react';
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

const {width, height} = Dimensions.get('window');

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (data) => 50;

class ItemNewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //content: props.content,
      //index: props.index,
      title: props.title,
    };
  }
  render() {
    return (
      <ScrollView style={{width: width, minHeight: height * 1.5}}>
        <Text>{title}</Text>
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
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({item}) => <ItemNewList title={item.title} />}
          keyExtractor={(item) => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    );
  }
}

export default New;
*/

import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (data) => 50;

const Item = ({title}) => {
  //console.log(title);
  return (
    <ScrollView style={{width: width, minHeight: height}}>
      <HTMLView value={title} />
    </ScrollView>
  );
};

const New = ({route}) => {
  //console.log(route.params.allFeed.length);
  return (
    <View>
      <VirtualizedList
        snapToInterval={width}
        decelerationRate="fast"
        horizontal={true}
        contentOffset={{x: width * route.params.index, y: 0}}
        initialNumToRender={route.params.allFeed.length}
        data={route.params.allFeed}
        windowSize={5}
        //initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} />}
        getItemCount={(data) => route.params.allFeed.length}
        getItem={(data, index) => ({
          id: Math.random().toString(12).substring(0),
          title: data[index].content || data[index].description,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    //justifyContent: 'center',
    width: width,
    minHeight: height * 1.5,
  },
  title: {
    fontSize: 32,
  },
});

export default New;
