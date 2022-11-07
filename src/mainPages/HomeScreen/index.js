import Reels from './Reels';
import React from 'react';

import videos from './utils/videos';

function HomeScreen(props) {
    return <Reels videos={videos} />;
  }
  
  export default HomeScreen;