import * as React from 'react';
import { useState } from 'react';

import { TheKeyboard } from './TheKeyboard';
import { TheKeyboardResolution } from './TheKeyboardResolution';
import { TheKeyboardComments } from './TheKeyboardComments';
import { TheLotsOfContentScrollViewResolution } from './TheLotsOfContentScrollViewResolution';
import { TheLotsOfContentScrollViewComments } from './TheLotsOfContentScrollViewComments';
import { WaysToFuckupDesign } from './WaysToFuckupDesign';
import { WaysToFuckupDesignFix } from './WaysToFuckupDesignFix';
import { WaysToFuckupDesignComments } from './WaysToFuckupDesignComments';
import { TouchableOpacity } from 'react-native';
import { TouchableAreas } from './TouchableAreas';
import { TouchableAreasResolution } from './TouchableAreasResolution';
import { TheLotsOfContentScrollView } from './TheLotsOfContentScrollView';

enum Steps {
  TheKeyboard = 'TheKeyboard',
  TheKeyboardResolution = 'TheKeyboardResolution',
  theKeyboardComments = 'theKeyboardComments',
  TheLotsOfContentScrollView = 'TheLotsOfContentScrollView',
  TheLotsOfContentScrollViewResolution = 'TheLotsOfContentScrollViewResolution',
  TheLotsOfContentScrollViewComments = 'TheLotsOfContentScrollViewComments',
  WaysToFuckupDesign = 'WaysToFuckupDesign',
  WaysToFuckupDesignFix = 'WaysToFuckupDesignFix',
  WaysToFuckupDesignComments = 'WaysToFuckupDesignComments',
  TouchableAreas = 'TouchableAreas',
  TouchableAreasResolution = 'TouchableAreasResolution',
  TouchableAreasComments = 'TouchableAreasComments',
}

export default function TabOneScreen() {
  const [step, setStep] = useState(Steps.TheKeyboard);

  if (step === Steps.TheKeyboard) {
    return <TheKeyboard goNext={() => setStep(Steps.TheKeyboardResolution)} />;
  }

  if (step === Steps.WaysToFuckupDesignFix) {
    return (
      <WaysToFuckupDesignFix
        goNext={() => setStep(Steps.WaysToFuckupDesignFix)}
      />
    );
  }
  if (step === Steps.WaysToFuckupDesign) {
    return (
      <WaysToFuckupDesign
        goNext={() => setStep(Steps.WaysToFuckupDesignComments)}
      />
    );
  }

  if (step === Steps.WaysToFuckupDesignComments) {
    return (
      <WaysToFuckupDesignComments
        goNext={() => setStep(Steps.WaysToFuckupDesignFix)}
      />
    );
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
        goNext={() => setStep(Steps.TheLotsOfContentScrollViewComments)}
      />
    );
  }

  if (step === Steps.TheLotsOfContentScrollView) {
    return (
      <TheLotsOfContentScrollView
        goNext={() => setStep(Steps.TheLotsOfContentScrollViewResolution)}
      />
    );
  }

  if (step === Steps.TheLotsOfContentScrollViewComments) {
    return (
      <TheLotsOfContentScrollViewComments
        goNext={() => setStep(Steps.TouchableAreas)}
      />
    );
  }

  if (step === Steps.TouchableAreas) {
    return (
      <TouchableAreas goNext={() => setStep(Steps.TouchableAreasResolution)} />
    );
  }

  if (step === Steps.TouchableAreasComments) {
    return (
      <TouchableAreasResolution
        goNext={() => setStep(Steps.TouchableAreasComments)}
      />
    );
  }

  if (step === Steps.TouchableAreasResolution) {
    return (
      <TouchableAreasResolution
        goNext={() => setStep(Steps.TouchableAreasComments)}
      />
    );
  }
}
