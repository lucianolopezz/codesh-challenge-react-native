import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import Home from '../screens/Home';
import Configuration from '../screens/Configuration';

const tabIcons = {
  TabHome: {
    icon: 'home',
  },
  TabConfig: {
    icon: 'account-cog',
  },
};

export type RootStackParamList = {
  Home: undefined;
};

export type RootTabParamList = {
  TabHome: undefined;
  TabConfig: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const TabsScreen = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.disabled,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar,
        },
        tabBarIcon: ({color, size}) => {
          const {icon} = tabIcons[route.name];

          return (
            <MaterialCommunityIcons name={icon} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabConfig"
        component={Configuration}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabsScreen} />
    </Stack.Navigator>
  );
}
