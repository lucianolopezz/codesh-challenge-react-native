import React from 'react';

import {FastImageProps} from 'react-native-fast-image';

import * as S from './styles';

interface AvatarProps extends FastImageProps {
  size?: number;
}

const Avatar = ({source, size = 60, ...props}: AvatarProps) => (
  <S.Avatar source={source} size={size} {...props} />
);

export default Avatar;
