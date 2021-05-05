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

export const content = {
  keyboard: {
    title: 'Tip 3: Beware with the overflow ',
    contents: [
      'There is no silver bullet. We need to test in all devices',
      'For texts that the user enter like names, we can use numberOfLines to block overflows to break the app',
      'For texts that we control we have to test in the languages, make restrictions',
    ],
  },
};
export const WaysToFuckupDesignComments = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);

  const advance = () => {
    if (count >= 3) return;
    setCount(count + 1);
    Animated.spring(textFontSize, {
      speed: 10,
      toValue: textFontSize._value + 0.1,
      useNativeDriver: false,
    }).start(() => {});
  };

  return (
    <Pressable onPress={advance} style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
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
                paddingTop: index * 14,
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
