import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const Highlights = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      thumbnail: require('../assets/images/Banner5.png'),
      headingOne: 'ADVANTURE ZONE',
      headingTwo: 'Let the fun times begin',
    },
    {
      id: 2,
      thumbnail: require('../assets/images/Banner1.png'),
      headingOne: 'SPORTS ZONE',
      headingTwo: 'Let the fun times begin',
    },
    {
      id: 3,
      thumbnail: require('../assets/images/Banner6.png'),
      headingOne: 'CHILDRENS ZONE',
      headingTwo: 'Let the fun times begin',
    },
    {
      id: 4,
      thumbnail: require('../assets/images/Banner2.png'),
      headingOne: 'ACTION ZONE',
      headingTwo: 'Let the fun times begin',
    },
  ];

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <Animated.View>
      <AnimatedFlatList
        style={{zIndex: 1}}
        vertical
        pagingEnabled={true}
        snapToAlignment="center"
        snapToInterval={WIDTH}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        // contentContainerStyle={{
        //   marginTop: 20,
        // }}
        data={data}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {x: translateX}}}],
        //   {useNativeDriver: false},
        // )}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('GameDetails', {selectedGame: item})
              }>
              <View
                style={{
                  width: WIDTH,
                  height: 400,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}>
                <ImageBackground
                  source={item?.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: WIDTH - 50,
                    height: 400,
                    justifyContent: 'flex-end',
                    borderRadius: 25,
                  }}
                  imageStyle={{
                    borderRadius: 35,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 150,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0,0.4)',
                      borderRadius: 35,
                    }}>
                    <Text
                      style={{
                        marginTop: 10,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 30,
                      }}>
                      {item?.headingOne}
                    </Text>
                    <Text
                      style={{
                        marginTop: 10,
                        color: 'white',
                        fontWeight: '400',
                        fontSize: 18,
                      }}>
                      {item?.headingTwo}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </Animated.View>
  );
};

export default Highlights;
