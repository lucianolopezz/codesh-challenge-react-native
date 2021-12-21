import React from 'react';

import * as S from './styles';

interface InputRadioProps {
  active: boolean;
  onPress: () => void;
}

const InputRadio = ({active, onPress}: InputRadioProps) => (
  <S.Container
    onPress={onPress}
    activeOpacity={0.4}
    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
    {active && <S.Active />}
  </S.Container>
);

export default InputRadio;
