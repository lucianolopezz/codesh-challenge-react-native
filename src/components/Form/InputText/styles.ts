import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  border-radius: ${({theme}) => theme.metrics.baseRadius}px;
`;

export const Wrapper = styled.View`
  width: 90%;
`;

export const IconRight = styled.View`
  align-items: center;
  width: 10%;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;

  color: ${({theme}) => theme.colors.secondary};

  margin-bottom: 7px;
`;

export const Input = styled(TextInput)`
  color: ${({theme}) => theme.colors.primary};
  padding-left: ${({theme}) => theme.metrics.basePadding}px;
  height: ${RFValue(40)}px;
  border-bottom-width: 0px;
  font-size: ${RFValue(14)}px;
`;
