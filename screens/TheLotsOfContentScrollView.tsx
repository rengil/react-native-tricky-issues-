import * as React from 'react';
import { useRef } from 'react';
import { Pressable, Animated, Image, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';
import bowie from './bowie.jpeg';

export const content = {
  keyboard: {
    title: 'The Lots of Content Scroll View',
    contents: [
      'The keyboard is a tricky thing',
      'The device size is not that big as the web',
      'Having an keyboard showing, the content might be hidden. Making the user confused',
      'So here is an input. Click it',
    ],
  },
};

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
      <Image source={bowie} style={{ width: 120, height: 120 }}></Image>
      <Text>{Math.pow(index, 30) * 712}</Text>
      <Text>{Math.pow(index, 30) * 712}</Text>
    </View>
  );
};

export const TheLotsOfContentScrollView = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);
  const [numb, setNumb] = React.useState(10);

  const advance = () => {
    if (count >= 4) return;
    setCount(count + 1);
    Animated.spring(textFontSize, {
      speed: 10,
      toValue: textFontSize._value + 0.25,
      useNativeDriver: false,
    }).start(() => {});
  };

  return (
    <ScrollView>
      <Button
        title="Next"
        onPress={() => {
          goNext();
        }}
      />
      <Button
        title="Increase 1000"
        onPress={() => {
          setNumb(numb + 1000);
        }}
      />
      {[...Array(numb)].map((_, index) => (
        <Content index={index} />
      ))}
    </ScrollView>
  );
};
