import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import cards from './Cards';

const Games = ({titleCaption}) => {
  return (
    <View style={{marginTop: 24}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 24,
          alignItems: 'center',
        }}>
        <Text
          style={{flex: 1, color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          {titleCaption}
        </Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 10}}
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <ScrollView>
              <View
                style={{
                  marginLeft: index == 0 ? 10 : 20,
                  marginRight: index == cards.length - 1 ? 10 : 0,
                  marginTop: 10,
                  marginBottom: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item?.picture}
                  resizeMode="cover"
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 20,
                  }}
                />

                <Text
                  style={{
                    marginTop: 10,
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '500',
                  }}>
                  {item?.caption}
                </Text>

                <View
                  style={{
                    width: 80,
                    backgroundColor: 'rgba(120,195,101,0.8)',
                    padding: 10,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{fontWeight: '500', color: 'white', fontSize: 15}}>
                    Book
                  </Text>
                </View>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default Games;
