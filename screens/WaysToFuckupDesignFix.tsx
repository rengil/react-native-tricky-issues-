import * as React from 'react';
import { useRef, useState } from 'react';
import { Pressable, Animated, Image, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { styles } from './styles';
import bowie from './bowie.jpeg';

export const content = {
  keyboard: {
    title: 'Ways to Fkup a design',
    contents: [],
  },
};

export const German = {
  hi: 'Hallo, Herr Vasconcelos Rickmann. Willkommen',
  title: 'Mallorca:Sind Sie schon vorbereitet und bereit?',
  checkIn: 'Einchecken',
  checkOut: 'Auschecken',
  book: 'Buchen ',
  share: 'Share ',
  similar: 'Ähnlich',
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

export const WaysToFuckupDesignFix = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(12);
  const [showTip, setShowTip] = React.useState(false);
  const [base, setBase] = useState(German);

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
          <>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingVertical: 8,
              }}
            >
              {base.hi}
            </Text>
            <View
              style={{
                borderRadius: 12,
                padding: 24,
                borderColor: 'rgb(221, 221, 221)',
                borderWidth: 1,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', paddingVertical: 2 }}
              >
                {base.title}
              </Text>
              {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {base.title}
            </Text> */}
              <Text style={{ marginTop: 4 }}>⭐️ 4,64 (478 Visitors)</Text>

              <Text style={{ marginTop: 12, fontWeight: 'bold' }}>
                {base.checkIn} ⬇️
              </Text>
              <TextInput
                style={{ marginTop: 2 }}
                placeholder="CHECK-IN"
                value="13.02.1990"
              />

              <Text style={{ marginTop: 12, fontWeight: 'bold' }}>
                {base.checkOut} ⬇️
              </Text>
              <TextInput
                style={{ marginTop: 2 }}
                placeholder="CHECK-IN"
                value="13.04.1990"
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  maxWidth: '100%',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    maxWidth: '33%',
                  }}
                >
                  <Button
                    color={'rgb(255, 56, 92)'}
                    title={`📓 ${base.book}`}
                    onPress={() => {}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    maxWidth: '33%',
                  }}
                >
                  <Button
                    color={'rgb(255, 56, 92)'}
                    title={`📓 ${base.share}`}
                    onPress={() => {
                      setBase(German);
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    maxWidth: '33.3%',
                  }}
                >
                  <Button
                    color={'rgb(255, 56, 92)'}
                    title={`📓 ${base.similar}`}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </>
        ) : null}

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
