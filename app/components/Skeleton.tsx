import React from 'react';

const Skeleton: React.FC<{ width?: string, height?: string }> = ({ width = '100%', height = '1rem' }) => {
  return (
    <div className="skeleton" style={{ width, height }}></div>
  );
};

export default Skeleton;
