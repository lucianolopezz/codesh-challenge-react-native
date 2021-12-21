import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;

  border-radius: ${RFValue(24 / 2)}px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.quaternary};
`;

export const Active = styled.View`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  border-radius: ${RFValue(12 / 2)}px;
  background-color: ${({theme}) => theme.colors.quaternary};
`;
