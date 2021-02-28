import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  continer: {
    backgroundColor: colors.blueHard,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.blue,
  },
});

export default styles;
