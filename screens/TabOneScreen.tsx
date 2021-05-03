import * as React from 'react';
import { useState } from 'react';

import { TheKeyboard } from './TheKeyboard';
import { TheKeyboardResolution } from './TheKeyboardResolution';
import { TheKeyboardComments } from './TheKeyboardComments';

enum Steps {
  TheKeyboard = 'TheKeyboard',
  TheKeyboardResolution = 'TheKeyboardResolution',
  theKeyboardComments = 'theKeyboardComments',
}

export default function TabOneScreen() {
  const [step, setStep] = useState(Steps.TheKeyboard);

  if (step === Steps.TheKeyboard) {
    return <TheKeyboard goNext={() => setStep(Steps.TheKeyboardResolution)} />;
  }

  if (step === Steps.TheKeyboardResolution) {
    return (
      <TheKeyboardResolution
        goNext={() => setStep(Steps.theKeyboardComments)}
      />
    );
  }

  if (step === Steps.theKeyboardComments) {
    return (
      <TheKeyboardComments goNext={() => setStep(Steps.theKeyboardComments)} />
    );
  }
}
