import React from 'react';
import FeedList from './feedList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import New from './new';

const Stack = createStackNavigator();

class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FeedList" component={FeedList} />
          <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Index;
