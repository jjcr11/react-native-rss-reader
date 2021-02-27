import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedList from './feedList';
import New from './new';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="FeedList"
          component={FeedList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="New"
          component={New}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
