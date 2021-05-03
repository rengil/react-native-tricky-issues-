import * as React from 'react';
import { useRef } from 'react';
import { Pressable, Animated, Image, Button, FlatList } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';
import bowie from './bowie.jpeg';

export const theKeyboardContent = {
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
      <Text>{Math.pow(index, 30) * 712}</Text>
    </View>
  );
};

export const TheLotsOfContentScrollViewResolution = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);

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
    <>
      <Button
        title="Next"
        onPress={() => {
          goNext();
        }}
      />
      <Text>Better</Text>
      <FlatList
        updateCellsBatchingPeriod={300}
        maxToRenderPerBatch={1}
        initialNumToRender={1}
        windowSize={2}
        data={[...Array(1000)]}
        renderItem={({ item, index }) => <Content index={index} />}
        keyExtractor={(i) => i}
      />
    </>
  );
};
