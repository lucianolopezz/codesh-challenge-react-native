import React from 'react';

import {Result} from '../../../../store/user/interfaces';
import {TouchableWithoutFeedback} from 'react-native';
import Avatar from '../../../../components/Avatar';

import * as S from './styles';
import moment from 'moment';

interface ItemProps {
  user: Result;
  onPress: (id: string) => void;
}

const Item = ({user, onPress}: ItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(user.login?.uuid)}>
      <S.Container>
        <Avatar source={{uri: user.picture?.medium}} />
        <S.Content>
          <S.Name>{`${user.name?.first} ${user.name?.last}`}</S.Name>
          <S.Nat>{user?.nat}</S.Nat>
          <S.Footer>
            <S.Description>{user?.gender}</S.Description>
            <S.Description>
              {moment(user.registered?.date).format('DD/MM/YYYY')}
            </S.Description>
          </S.Footer>
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Item;
