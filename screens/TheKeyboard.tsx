import * as React from 'react';
import { useRef } from 'react';
import { Pressable, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';

export const content = {
  keyboard: {
    title: 'The Keyboard',
    contents: [
      'The keyboard. I personally hate the keyboard',
      'The height of the keyboard is different in ios from android, and android has a thousand. You cant predict the height',
      'What happens when the keyboard opens. Lets say an input',
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
            fontSize: 32,
            transform: [
              {
                translateY: textFontSize.interpolate({
                  inputRange: [1, 10],
                  outputRange: [0, -400],
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
