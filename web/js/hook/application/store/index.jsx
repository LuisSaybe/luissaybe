import React from 'react';
import PropTypes from 'prop-types';

import {
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext,
  SpeechSynthesisSettingsContext,
  DispatchSpeechSynthesisSettingsContext
} from 'web/js/context';

import { useUserInterfaceSettings } from 'web/js/reducer/useUserInterfaceSettings';
import { useSpeechSynthesisSettings } from 'web/js/reducer/useSpeechSynthesisSettings';

export function Store({ children }) {
  const [ userInterfaceState, dispatchUserInterfaceState ] = useUserInterfaceSettings();
  const [ userSpeechSynthesisSettings , dispatchSpeechSynthesisSettings  ] = useSpeechSynthesisSettings();

  return (
    <SpeechSynthesisSettingsContext.Provider value={userSpeechSynthesisSettings}>
      <DispatchSpeechSynthesisSettingsContext.Provider value={dispatchSpeechSynthesisSettings}>
        <UserInterfaceSettingsContext.Provider value={userInterfaceState}>
         <DispatchUserInterfaceSettingsContext.Provider value={dispatchUserInterfaceState}>
           {children}
          </DispatchUserInterfaceSettingsContext.Provider>
        </UserInterfaceSettingsContext.Provider>
      </DispatchSpeechSynthesisSettingsContext.Provider>
    </SpeechSynthesisSettingsContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired
};
