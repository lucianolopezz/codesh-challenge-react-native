import React, {memo} from 'react';

import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Loading, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({title, disabled, loading, ...rest}: ButtonProps) => {
  const theme = useTheme();

  return (
    <Container disabled={loading || disabled} {...rest}>
      {loading ? (
        <Loading color={loading ? theme.colors.primary : '#fff'} />
      ) : (
        <Title disabled={disabled}>{title}</Title>
      )}
    </Container>
  );
};

export default memo(Button);
