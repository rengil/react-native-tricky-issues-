import * as React from 'react';
import { useRef } from 'react';
import {
  Pressable,
  Animated,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';

export const theKeyboardContent = {
  keyboard: {
    title: 'The Keyboard Comments',
    contents: [
      'Unless a pretty static page. Add a ScrollView to the page. Users of small devices will love you',
      'The keyboard avoiding strategy is not a simple task. You can have differences between Android, IOS X and IOS',
      'My tip. Create base layouts to treat that in the whole app and',
      'Start an app caring about that',
    ],
  },
};
export const TheKeyboardComments = ({ goNext }: any) => {
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
      <ScrollView contentContainerStyle={styles.container}>
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
                paddingTop: index * 14,
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
      </ScrollView>
    </Pressable>
  );
};
