import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

interface AvatarProps {
  size: number;
}

export const Avatar = styled(FastImage)<AvatarProps>`
  width: ${({size}) => RFValue(size)}px;
  height: ${({size}) => RFValue(size)}px;
  border-radius: ${({size}) => RFValue(size) / 2}px;
`;
