import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(FastImage)`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${({theme}) => theme.metrics.basePadding}px;
`;

export const ContainerInput = styled.View`
  width: 80%;
`;

export const IconRight = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const IconFilter = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const List = styled.FlatList`
  margin-top: ${({theme}) => theme.metrics.baseMargin * 2}px;
`;

export const ContainerLoading = styled.View`
  margin-top: ${({theme}) => theme.metrics.baseMargin * 2}px;
  padding-horizontal: ${({theme}) => theme.metrics.basePadding * 2}px;
`;

export const LoadingMore = styled.ActivityIndicator.attrs(({theme}) => {
  return {
    size: 'small',
    color: theme.colors.tertiary,
  };
})`
  margin-top: ${({theme}) => theme.metrics.baseMargin}px;
`;

export const EmptyText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;
