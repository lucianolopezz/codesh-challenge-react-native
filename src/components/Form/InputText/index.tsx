import React, {forwardRef, memo} from 'react';

import {TextInputProps} from 'react-native';

import {useTheme} from 'styled-components';

import * as S from './styles';

interface InputTextProps extends TextInputProps {
  label?: string;
  iconRight?: JSX.Element;
}

const InputText = ({label, iconRight, ...props}: InputTextProps, ref: any) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Wrapper>
        {label && <S.Label>{label}</S.Label>}
        <S.Input
          ref={ref}
          placeholderTextColor={theme.colors.disabled}
          underlineColorAndroid={undefined}
          {...props}
        />
      </S.Wrapper>
      {iconRight && <S.IconRight>{iconRight}</S.IconRight>}
    </S.Container>
  );
};

export default memo(forwardRef(InputText));
