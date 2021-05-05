import * as React from 'react';
import { useRef } from 'react';
import {
  Pressable,
  Animated,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';

export const content = {
  title: 'Wrap it up!',
  contents: [
    '🎹 Opening of the Keyboard.',
    '🐢 ScrollViews/FlatLists Performance',
    '⚠️ ScreenSize/MultiDevice can cause you pain',
    '👌 Touchable areas. We code with the mouse. We use with the finger',
  ],
};

import { ScrollView, Dimensions } from 'react-native';

export const Swiper: React.FC<{
  width: number;
  paddingLeft: number;
}> = ({ children, width, paddingLeft }) => {
  return (
    <ScrollView
      pagingEnabled
      horizontal={true}
      decelerationRate={0}
      snapToInterval={width}
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft }}
    >
      {children}
    </ScrollView>
  );
};

export const TabTwoScreen = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);

  const advance = () => {
    setCount(count + 1);
    Animated.spring(textFontSize, {
      speed: 10,
      toValue: textFontSize._value + 0.4,
      useNativeDriver: false,
    }).start(() => {});
  };

  return (
    <Swiper>
      {content.contents.map((c, index) => {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexWrap: 'wrap',
              backgroundColor: index % 2 !== 0 ? 'rgb(255, 56, 92)' : 'black',
              width: Dimensions.get('window').width * 0.98,
              alignSelf: 'center',
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: index % 2 === 0 ? 'rgb(255, 56, 92)' : 'black',
                flexWrap: 'wrap',
                minHeight: '60%',
                minWidth: '100%',
                paddingVertical: 64,
                paddingLeft: 32,
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  lineHeight: 32,
                  textAlign: 'center',
                  flexWrap: 'wrap',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {c}
              </Text>
            </View>
          </View>
        );
      })}
    </Swiper>
  );
};

export default TabTwoScreen;
