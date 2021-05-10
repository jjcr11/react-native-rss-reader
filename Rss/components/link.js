import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/linkStyles';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.continer}>
        <Text style={styles.title}>Link:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.state.text = text;
          }}
          placeholder={'Here enter your link'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const url = 'http://feeds.weblogssl.com/genbeta';
            var type = 0;
            var shortUrl = '';
            const find = this.state.text.search('http://');
            if (find == -1) {
              type = 1;
              shortUrl = this.state.text.substr(8, url.length);
            } else {
              shortUrl = this.state.text.substr(7, url.length);
            }
            const shortUrl2 = shortUrl.replace('/', '^');
            const url2 =
              'http://192.168.0.16:8000/add/' + type + '/' + shortUrl2 + '/';

            fetch(url2)
              .then((response) => response.json())
              .then((data) => {
                alert('Link added correctly');
                console.log(data);
              })
              .catch((err) => console.error(err));
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Link;
