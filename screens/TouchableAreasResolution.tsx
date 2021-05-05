import * as React from 'react';
import { useRef, useState } from 'react';
import {
  Pressable,
  Animated,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';
import bowie from './bowie.jpeg';

export const content = {
  keyboard: {
    title: 'TouchableAreas Resolution',
    contents: ['We update the touchableArea, the hitSlops'],
  },
};

export const hitSlop = (value) => ({
  top: value,
  bottom: value,
  left: value,
  right: value,
});

const Content = ({ index }) => {
  return (
    <View
      style={{
        backgroundColor: index % 2 === 0 ? 'pink' : 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: '100%',
      }}
    >
      <Image source={bowie} style={{ width: 120, height: 120 }}></Image>
      <Text>{Math.pow(index, 30) * 712}</Text>
    </View>
  );
};

export const TouchableAreasResolution = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(7);
  const [showTip, setShowTip] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  const advance = () => {
    if (count >= 6) return;
    setCount(count + 1);
    Animated.spring(textFontSize, {
      speed: 10,
      toValue: textFontSize._value + 0.25,
      useNativeDriver: false,
    }).start(() => {});
  };

  return (
    <Pressable onPress={advance} style={styles.container}>
      {menu ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 1000,
            left: 0,
            height: '100%',
            width: 70,
          }}
        >
          <Text style={{ fontSize: 32 }}>Start 🏁</Text>
          <Text style={{ fontSize: 32 }}>Stop ✋</Text>
        </View>
      ) : null}
      <View style={styles.container}>
        <Animated.Text
          style={{
            fontSize: 32,
            transform: [
              {
                translateY: textFontSize.interpolate({
                  inputRange: [1, 10],
                  outputRange: [0, -60],
                }),
              },
            ],
          }}
        >
          {content.keyboard.title}
        </Animated.Text>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {[...Array(count <= 4 ? count : 4)].map((_, index) => (
            <Text
              key={index}
              style={{
                paddingTop: index * 8,
                fontSize: 16,
                left: 0,
                textAlign: 'center',
                paddingHorizontal: 16,
              }}
            >
              {content.keyboard.contents[index]}
            </Text>
          ))}
        </View>

        {count >= 3 ? (
          <TouchableOpacity
            hitSlop={hitSlop(20)}
            style={{ marginTop: 72 }}
            onPress={() => setMenu(!menu)}
          >
            <Text>🍔</Text>
          </TouchableOpacity>
        ) : null}

        <View style={{ marginTop: 72 }} />
        <Button
          title="Next"
          onPress={() => {
            goNext();
          }}
        />
      </View>
    </Pressable>
  );
};
