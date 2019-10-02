import React from 'react';

import { Application } from 'web/js/hook/application/application';
import { Store } from 'web/js/hook/application/store';

export function Root() {
  return (
    <Store>
      <Application />
    </Store>
  );
}
