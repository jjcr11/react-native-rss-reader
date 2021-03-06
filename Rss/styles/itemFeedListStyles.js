import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  hoursText: {
    fontSize: 10,
    color: colors.gray,
    fontWeight: 'bold',
  },
});

export default styles;
