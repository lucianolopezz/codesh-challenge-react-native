import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
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
      flexGrow: 1,
      justifyContent: 'space-between',
      padding: theme.metrics.basePadding * 2,
    },
  };
})``;

export const Wrapper = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  padding-left: ${({theme}) => theme.metrics.basePadding}px;
`;

export const Select = styled(SelectDropdown).attrs(({theme}) => {
  return {
    buttonStyle: {
      width: '100%',
      height: RFValue(35),
      backgroundColor: 'transparent',
      marginTop: theme.metrics.baseMargin * 2,
      borderRadius: theme.metrics.baseRadius,
      borderColor: theme.colors.secondary,
      borderWidth: 1,
    },
    buttonTextStyle: {
      color: theme.colors.primary,
    },
  };
})``;

export const Footer = styled.View`
  margin-bottom: ${({theme}) => theme.metrics.baseMargin * 2}px;
`;
