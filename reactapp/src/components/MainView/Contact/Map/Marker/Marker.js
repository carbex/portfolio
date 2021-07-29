import React from 'react';
import * as S from './Marker.styles'

const Marker = (props) => {
  // Default props
  const { 
    color,
    name 
  } = props;

  return (
    <>
      <S.Pin
        color={color}
        title={name}
      />
      <S.Pulse />
    </>
  );
};

export default Marker;