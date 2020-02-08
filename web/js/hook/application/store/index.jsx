import React from 'react';
import PropTypes from 'prop-types';

import {
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext,
} from 'web/js/context';

import { useUserInterfaceSettings } from 'web/js/reducer/useUserInterfaceSettings';

export function Store({ children }) {
  const [ userInterfaceState, dispatchUserInterfaceState ] = useUserInterfaceSettings();

  return (
    <UserInterfaceSettingsContext.Provider value={userInterfaceState}>
      <DispatchUserInterfaceSettingsContext.Provider value={dispatchUserInterfaceState}>
        {children}
      </DispatchUserInterfaceSettingsContext.Provider>
    </UserInterfaceSettingsContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired
};
