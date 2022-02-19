import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Highlights from '../components/Highlights';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <Highlights />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
