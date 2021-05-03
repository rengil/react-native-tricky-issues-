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
    title: 'That is a Big Big List Mate',
    contents: [
      'Use ScrollView for static page that can grow. So you take care of small devices not losing content',
      'If the list tend to grow with time or is a huge list ( think of Freework app ). You need a performatic list',
      'Take your time to understand the config parameters. Long and slow lists makes the user pissed',
      'Know if you need to paginate in the backend',
      'Need Sections. There is also a FlatList with a section',
    ],
  },
};
export const TheLotsOfContentScrollViewComments = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);

  const advance = () => {
    if (count >= 5) return;
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
