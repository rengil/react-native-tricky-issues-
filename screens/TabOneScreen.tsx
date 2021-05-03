import * as React from 'react';
import { useState } from 'react';

import { TheKeyboard } from './TheKeyboard';
import { TheKeyboardResolution } from './TheKeyboardResolution';
import { TheKeyboardComments } from './TheKeyboardComments';
import { TheLotsOfContentScrollViewResolution } from './TheLotsOfContentScrollViewResolution';
import { TheLotsOfContentScrollViewComments } from './TheLotsOfContentScrollViewComments';

enum Steps {
  TheKeyboard = 'TheKeyboard',
  TheKeyboardResolution = 'TheKeyboardResolution',
  theKeyboardComments = 'theKeyboardComments',
  TheLotsOfContentScrollView = 'TheLotsOfContentScrollView',
  TheLotsOfContentScrollViewResolution = 'TheLotsOfContentScrollViewResolution',
  TheLotsOfContentScrollViewComments = 'TheLotsOfContentScrollViewComments',
}

export default function TabOneScreen() {
  const [step, setStep] = useState(Steps.TheLotsOfContentScrollView);

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
      <TheKeyboardComments
        goNext={() => setStep(Steps.TheLotsOfContentScrollView)}
      />
    );
  }

  if (step === Steps.TheLotsOfContentScrollViewResolution) {
    return (
      <TheLotsOfContentScrollViewResolution
        goNext={() => setStep(Steps.TheLotsOfContentScrollViewResolution)}
      />
    );
  }

  if (step === Steps.TheLotsOfContentScrollView) {
    return (
      <TheLotsOfContentScrollViewResolution
        goNext={() => setStep(Steps.TheLotsOfContentScrollView)}
      />
    );
  }

  if (step === Steps.TheLotsOfContentScrollViewComments) {
    return (
      <TheLotsOfContentScrollViewComments
        goNext={() => setStep(Steps.TheLotsOfContentScrollViewComments)}
      />
    );
  }
}
