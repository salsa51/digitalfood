import React from 'react';
import PropTypes from 'prop-types';

export const FrameWrapper = ({ className, src }) => {
  return (
    <img className={className} alt="FrameWrapper" src={src} />
  );
};

FrameWrapper.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default FrameWrapper



