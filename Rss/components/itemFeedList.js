import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/itemFeedListStyles';
import {Card} from 'react-native-elements';
import moment from 'moment';

class ItemFeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //allFeed: props.allFeed,
      navigation: props.navigation,
      title: props.title,
      //index: props.index,
      date: props.date,
      content: props.content,
      link: props.link,
      hours: 0,
    };
  }
  componentDidMount() {
    //const feedDate = moment(this.state.date, 'ddd, D MMM YYYY kk:mm:ss').format(
    const feedDate = moment(
      this.state.date,
      'YYYY-MM-DDTmm:mm:ssZ',
      true,
    ).format('dddd, D MMM YYYY');
    const now = moment();
    this.setState({
      date: feedDate,
      hours: now.diff(feedDate, 'hours'),
    });
  }
  render() {
    //console.log(this.state.link);
    return (
      <TouchableOpacity
        onPress={() => {
          this.state.navigation.navigate('New', {
            content: this.state.content,
            title: this.state.title,
            link: this.state.link,
            //allFeed: this.state.allFeed,
            //index: this.state.index,
          });
        }}>
        <Card containerStyle={styles.card}>
          <Text style={styles.text}>{this.state.title}</Text>
          <Card.Divider />
          <Text style={styles.hoursText}>
            {this.state.date + ' - ' + this.state.hours + ' Hours ago'}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default ItemFeedList;
