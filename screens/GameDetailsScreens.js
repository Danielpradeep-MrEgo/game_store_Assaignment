import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import back from '../assets/images/left-arrow.png';
import share from '../assets/images/share.png';
import Games from '../components/Games';

const GameDetailsScreens = ({route}) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    let {selectedGame} = route?.params;
    setSelectedGame(selectedGame);
  }, []);

  const GameDetailsHeader = () => {
    return (
      <ImageBackground
        source={selectedGame?.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 400,
          marginBottom: 30,
        }}
        imageStyle={{
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
          borderTopLeftRadius: 0,
        }}
        resizeMode="cover">
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Platform.OS === 'ios' ? 40 : 20,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 15,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
              onPress={() => navigation.goBack()}>
              <Image
                source={back}
                style={{width: 18, height: 15, tintColor: 'black'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 15,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
              onPress={() => console.log('share')}>
              <Image source={share} style={{width: 18, height: 18}} />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['transparent', '#000']}
              style={{
                width: '100%',
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
              }}>
              <Text
                style={{
                  marginTop: 10,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 30,
                }}>
                {selectedGame?.headingOne}
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  // marginBottom: 10,
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                {selectedGame?.headingTwo}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      {GameDetailsHeader()}

      <Games titleCaption={'Advanture Games'} />
      <Games titleCaption={'Advanture Packages'} />
    </ScrollView>
  );
};

export default GameDetailsScreens;
