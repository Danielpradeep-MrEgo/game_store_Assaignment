import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TabIcon from '../components/TabIcon';
import home from '../assets/images/home.png';
import mic from '../assets/images/mic.png';
import head from '../assets/images/headphones.png';
import joystick from '../assets/images/joystick.png';
import {BlurView} from 'expo-blur';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          height: 100,
        },
      }}
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={home} />,
          headerStatusBarHeight: 0,
          //   headerTransparent: true,
          title: 'F U N S C A P E',
          headerTitleStyle: {fontWeight: '400', FontFamily: 'Roboto'},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Play"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={joystick} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={head} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={mic} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
