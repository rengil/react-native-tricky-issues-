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
    title: 'The Keyboard',
    contents: [
      'The keyboard is a tricky thing',
      'The device size is not that big as the web',
      'Having an keyboard showing, the content might be hidden. Making the user confused',
      'We can adjust the keyboard with some components that will help us avoid it',
    ],
  },
};

export const TheKeyboardResolution = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(16)).current;
  const [count, setCount] = React.useState(6);
  const [showTip, setShowTip] = React.useState(false);

  const advance = () => {
    if (count >= 4) return;
    setCount(count + 1);
    Animated.spring(textFontSize, {
      toValue: textFontSize._value + 5,
      useNativeDriver: false,
    }).start();
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ height: '100%' }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.Text
          style={{
            ...styles.title,
            fontSize: textFontSize,
            bottom: textFontSize.interpolate({
              inputRange: [16, 50],
              outputRange: [0, 150],
            }),
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
            style={{ marginTop: 128 }}
            placeholder="Hey, I am an input"
          />
        ) : null}

        <Button
          title="Next"
          onPress={() => {
            goNext();
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
