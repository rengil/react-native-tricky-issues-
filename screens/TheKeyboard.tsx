import * as React from 'react';
import { useRef } from 'react';
import { Pressable, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';

export const theKeyboardContent = {
  keyboard: {
    title: 'The Keyboard',
    contents: [
      'The keyboard is a tricky thing',
      'The device size is not that big as the web',
      'Having an keyboard showing, the content might be hidden. Making the user confused',
      'So here is an input. Click it',
    ],
  },
};

export const TheKeyboard = ({ goNext }: any) => {
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
    <Pressable onPress={advance} style={styles.container}>
      <View style={styles.container}>
        <Animated.Text
          style={{
            transform: [
              {
                scale: textFontSize,
              },
              {
                translateY: textFontSize.interpolate({
                  inputRange: [1, 10],
                  outputRange: [0, -400],
                }),
              },
            ],
          }}
        >
          {theKeyboardContent.keyboard.title}
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
              {theKeyboardContent.keyboard.contents[index]}
            </Text>
          ))}
        </View>
        {count >= 4 ? (
          <TextInput
            onFocus={() => setShowTip(true)}
            style={{ marginTop: 120 }}
            placeholder="Hey, I am an input"
          />
        ) : null}
        {showTip && (
          <>
            <Text
              style={{
                marginTop: 32,
                color: 'teal',
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >
              "Tip number 1. Take care about the keyboard"
            </Text>
          </>
        )}
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
