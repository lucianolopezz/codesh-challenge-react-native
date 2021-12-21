import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Modal as RNModal} from 'react-native';

export const Modal = styled(RNModal)``;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContainerAvatar = styled.View`
  align-self: center;
  position: absolute;
  top: -50px;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: ${({theme}) => theme.metrics.baseRadius}px;
  box-shadow: 10px 5px 5px black;
  height: 80%;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: ${({theme}) => theme.metrics.baseMargin}px;
`;

export const IconClose = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.disabled};
`;

export const Body = styled.ScrollView.attrs(({theme}) => {
  return {
    contentContainerStyle: {
      padding: theme.metrics.basePadding * 2,
    },
  };
})``;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.quaternary};
  font-weight: bold;
  text-align: center;
`;

export const TextId = styled(Name)`
  font-size: ${RFValue(12)}px;
  font-weight: 500;
`;

export const Description = styled.View`
  margin-top: ${({theme}) => theme.metrics.baseMargin * 2}px;
`;

export const DescriptionText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  line-height: 25px;
`;
