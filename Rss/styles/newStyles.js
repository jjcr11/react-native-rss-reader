import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  mainContiner: {
    margin: 10,
  },
  title: {
    fontSize: 25,
    //color: colors.blueHard,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
  },
  image: {
    width: 320,
    height: 180,
    alignSelf: 'center',
    marginVertical: 10,
  },
  linkText: {
    color: colors.gray,
    fontSize: 20,
    textDecorationLine: 'underline',
    textAlign: 'justify',
  },
  buttonsContiner: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    borderRadius: 50,
    backgroundColor: colors.blueHard,
    flex: 1,
    marginHorizontal: 25,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
