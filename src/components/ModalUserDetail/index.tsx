import moment from 'moment';
import React from 'react';

import Avatar from '../../components/Avatar';
import {Result} from '../../store/user/interfaces';

import * as S from './styles';

interface ModalUserDetailProps {
  user: Result;
  visible: boolean;
  onClose: () => void;
}

const ModalUserDetail = ({visible, user, onClose}: ModalUserDetailProps) => (
  <S.Modal animationType="fade" transparent visible={visible}>
    <S.Container>
      <S.Content>
        <S.ContainerAvatar>
          <Avatar
            size={80}
            source={{
              uri: user.picture?.medium,
            }}
          />
        </S.ContainerAvatar>
        <S.ButtonClose activeOpacity={0.5} onPress={onClose}>
          <S.IconClose name="close" />
        </S.ButtonClose>
        <S.Body>
          <S.Name>{`${user.name?.first} ${user.name?.last}`}</S.Name>
          <S.TextId>#{user.id?.value}</S.TextId>
          <S.Description>
            <S.DescriptionText>{user?.phone}</S.DescriptionText>
            <S.DescriptionText>{user?.email}</S.DescriptionText>
            <S.DescriptionText>{user?.gender}</S.DescriptionText>
            <S.DescriptionText>{user?.nat}</S.DescriptionText>
            <S.DescriptionText>
              {`${user.location?.street?.name}, ${user.location?.street?.number}`}
            </S.DescriptionText>
            <S.DescriptionText>
              {moment(user.registered?.date).format('DD/MM/YYYY')}
            </S.DescriptionText>
          </S.Description>
        </S.Body>
      </S.Content>
    </S.Container>
  </S.Modal>
);

export default ModalUserDetail;
