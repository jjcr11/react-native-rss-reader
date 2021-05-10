import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  continer: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: colors.blueHard,
    fontWeight: 'bold',
  },
  textInput: {
    borderRadius: 50,
    marginTop: 40,
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    borderRadius: 50,
    marginTop: 40,
    backgroundColor: colors.blue,
    width: 150,
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
