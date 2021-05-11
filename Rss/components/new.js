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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      navigation: props.navigation,
      id: props.route.params.id,
    };
  }
  componentDidMount() {
    //console.log(data);
    fetch('http://192.168.0.16:8000/feed/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          data: data,
        });
        //console.log(data[0]);
      })
      .catch((err) => console.error(err));
  }
  render() {
    if (this.state.loading) {
      return <Text>CARGANDO</Text>;
    } else {
      //x =
      return (
        <View>
          <FlatList
            snapToInterval={0}
            disableIntervalMomentum={true}
            decelerationRate={'fast'}
            horizontal={true}
            contentOffset={{x: width * this.state.id, y: 0}}
            initialNumToRender={this.state.data.length}
            data={this.state.data}
            renderItem={(item) => (
              <ItemNew
                content={item.item.content}
                title={item.item.title}
                link={item.item.link}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
  }
}

class ItemNew extends React.Component {
  constructor(props) {
    super(props);
    this.onShare = this.onShare.bind(this);
    this.state = {
      content: props.content,
      title: props.title,
      link: props.link,
    };
  }
  async onShare() {
    try {
      const result = await Share.share({
        message: this.state.link,
      });
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    //console.log(this.state.link);
    var componentes = [];
    this.state.content.forEach((element) => {
      if (element.type === 'text') {
        if (element.content !== '') {
          componentes.push(<Text style={styles.text}>{element.content}</Text>);
        }
      } else if (element.type === 'image') {
        componentes.push(
          <Image
            style={styles.image}
            source={{
              uri: element.link,
            }}
          />,
        );
      } else if (element.type === 'h1') {
        componentes.push(<Text style={{fontSize: 25}}>{element.content}</Text>);
      } else if (element.type === 'h2') {
        componentes.push(<Text style={{fontSize: 23}}>{element.content}</Text>);
      } else if (element.type === 'h3') {
        componentes.push(<Text style={{fontSize: 21}}>{element.content}</Text>);
      } else if (element.type === 'h4') {
        componentes.push(<Text style={{fontSize: 19}}>{element.content}</Text>);
      } else if (element.type === 'h5') {
        componentes.push(<Text style={{fontSize: 17}}>{element.content}</Text>);
      } else if (element.type === 'h6') {
        componentes.push(<Text style={{fontSize: 15}}>{element.content}</Text>);
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
      <ScrollView style={{width: width}}>
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

export default New;
