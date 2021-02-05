import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './stackNavigator';
import Link from './link';

const Tab = createBottomTabNavigator();

class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="List" component={StackNavigator} />
          <Tab.Screen name="Link" component={Link} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Index;
