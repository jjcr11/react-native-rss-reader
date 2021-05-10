import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  Linking,
  Share,
} from 'react-native';
import styles from '../styles/newStyles';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.onShare = this.onShare.bind(this);
    this.state = {
      content: props.route.params.content,
      title: props.route.params.title,
      link: props.route.params.link,
    };
  }
  async onShare() {
    try {
      const result = await Share.share({
        message:
          //'React Native | A framework for building native apps using React',
          this.state.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    //console.log(this.state.link);
    var componentes = [];
    this.state.content.forEach((element) => {
      if (element.type === 'text') {
        componentes.push(<Text style={styles.text}>{element.content}</Text>);
      } else if (element.type === 'image') {
        componentes.push(
          <Image
            style={styles.image}
            source={{
              uri: element.link,
            }}
          />,
        );
      } else {
        componentes.push(
          <Text>
            <Text
              style={styles.linkText}
              onPress={() => {
                Linking.openURL(element.link);
              }}>
              {element.content}
            </Text>
          </Text>,
        );
      }
    });
    return (
      <ScrollView>
        <Text style={styles.title}>{this.state.title}</Text>
        <View style={styles.mainContiner}>{componentes}</View>
        <View style={styles.buttonsContiner}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(this.state.link);
            }}>
            <Text style={styles.buttonText}>Visit post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onShare}>
            <Text style={styles.buttonText}>Share post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

/*
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
*/
export default New;
