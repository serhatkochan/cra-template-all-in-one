import React from 'react';
import Lottie from 'lottie-react';

import loader from './loader.json';

const Loader = () => {
  return <Lottie className="loader" width={10} animationData={loader} />;
};

export default Loader;
