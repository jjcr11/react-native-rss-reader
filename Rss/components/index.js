import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './stackNavigator';
import Link from './link';
import styles from '../styles/indexStyles';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {backgroundColor: colors.blue},
            activeTintColor: colors.blueHard,
            inactiveTintColor: colors.white,
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              if (route.name === 'FeedList') {
                return <Icon name="rss-feed" size={30} color={color} />;
              } else if (route.name === 'Link') {
                return (
                  <Icon name="add-circle-outline" size={30} color={color} />
                );
              }
            },
            tabBarLabel: () => {
              return null;
            },
          })}>
          <Tab.Screen name="FeedList" component={StackNavigator} />
          <Tab.Screen name="Link" component={Link} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Index;
