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
    contents: [
      'A static world is marvelous.',
      'Everybody would have the same device',
      'Same size, same brand, even same language',
      'Lets see',
    ],
  },
};

export const English = {
  hi: 'Hi, Gil. Welcome',
  title: 'Mallorca: Are you ready ?',
  checkIn: 'Check-in',
  checkOut: 'Check-out',
  book: 'Book',
  share: 'Share',
  similar: 'Similar',
};

export const German = {
  hi: 'Hallo, Herr Vasconcelos Rickmann. Willkommen',
  title: 'Mallorca:Sind Sie schon vorbereitet und bereit?',
  checkIn: 'Einchecken',
  checkOut: 'Auschecken',
  book: 'Buchen Jetzt ',
  share: 'Share ',
  similar: 'Ähnlich Und Mehr',
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

export const WaysToFuckupDesign = ({ goNext }: any) => {
  const textFontSize = useRef(new Animated.Value(1)).current;
  const [count, setCount] = React.useState(0);
  const [showTip, setShowTip] = React.useState(false);
  const [base, setBase] = useState(English);

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
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{base.hi}</Text>
            <View
              style={{
                borderRadius: 12,
                padding: 24,
                borderColor: 'rgb(221, 221, 221)',
                borderWidth: 1,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
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

              <View style={{ flexDirection: 'row', marginTop: 12 }}>
                <Button
                  color={'rgb(255, 56, 92)'}
                  title={`📓 ${base.book}`}
                  onPress={() => {}}
                />
                <Button
                  color={'rgb(255, 56, 92)'}
                  title={`📓 ${base.share}`}
                  onPress={() => {
                    setBase(German);
                  }}
                />
                <Button
                  color={'rgb(255, 56, 92)'}
                  title={`📓 ${base.similar}`}
                  onPress={() => {}}
                />
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
