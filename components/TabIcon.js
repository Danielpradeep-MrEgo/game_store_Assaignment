import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabIcon = ({focused,icon}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? 'black' : 'gray',
        }}
      />
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({});
