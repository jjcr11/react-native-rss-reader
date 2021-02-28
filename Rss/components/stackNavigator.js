import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedList from './feedList';
import New from './new';
import Header from './header';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={() => ({
          header: ({scene}) => {
            if (scene.route.name === 'FeedList') {
              return <Header name={'Feed'} />;
            }
          },
        })}>
        <Stack.Screen name="FeedList" component={FeedList} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
