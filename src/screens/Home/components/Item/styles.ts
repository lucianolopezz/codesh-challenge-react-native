import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid ${({theme}) => theme.colors.tertiary}; */
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.disabled};
  padding: ${({theme}) => theme.metrics.basePadding}px;
  margin-horizontal: ${({theme}) => theme.metrics.baseMargin}px;
  margin-bottom: 5px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${({theme}) => theme.metrics.baseMargin}px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.tertiary};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const Nat = styled(Name)`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.metrics.baseMargin}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.quintenary};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;
