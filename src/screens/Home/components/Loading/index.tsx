import React from 'react';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const Loading = () => (
  <Placeholder
    Animation={Fade}
    Left={() => (
      <PlaceholderMedia isRound size={60} style={{marginRight: 10}} />
    )}>
    <PlaceholderLine width={60} />
    <PlaceholderLine width={30} />
    <PlaceholderLine width={30} />
  </Placeholder>
);

export default Loading;
