import {TouchableOpacity, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface TitleProps extends TextProps {
  disabled?: boolean;
}

const ButtonDisabled = css`
  background-color: ${({theme}) => theme.colors.disabled};
`;

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  border-radius: 30px;

  background-color: ${({theme}) => theme.colors.primary};

  ${({disabled}) => disabled && ButtonDisabled};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({disabled}) => (disabled ? '#A2A2A2' : '#fff')};

  font-weight: 500;
  font-size: ${RFValue(16)}px;
  text-transform: capitalize;
`;

export const Loading = styled.ActivityIndicator``;
