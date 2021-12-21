import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {useAppDispatch, useAppSelector, useToggle} from '../../hooks';
import replaceSpecialCharacters from 'replace-special-characters';
import ModalUserDetail from '../../components/ModalUserDetail';
import {selectUserById} from '../../store/user/selectors';
import ModalFilter from './components/ModalFilter';
import {getUsers} from '../../store/user/actions';
import {InputText} from '../../components/Form';
import Loading from './components/Loading';
import {clear} from '../../store/user';
import Item from './components/Item';

import imgLogo from '../../assets/logo.png';

import * as S from './styles';

interface FilterProps {
  gender?: string;
  nat?: string;
}

const Home = () => {
  const [filter, setFilter] = useState({} as FilterProps);
  const [searchText, setSearchText] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [toggleModalUser, setToggleModalUser] = useToggle(false);
  const [toggleModalFilter, setToggleModalFilter] = useToggle(false);

  const dispatch = useAppDispatch();
  const {results, nextPage, loading} = useAppSelector(state => state.user);
  const userDetail = useAppSelector(selectUserById(selectedUserId));

  const formData = {
    page: nextPage,
    gender: filter?.gender,
    nat: filter?.nat,
  };

  const filterUsers = () => dispatch(getUsers(formData));

  const handleSubmitFilter = useCallback(
    (filterData: FilterProps) => {
      dispatch(clear());
      setFilter(filterData);
      setToggleModalFilter();
    },
    [dispatch, setToggleModalFilter],
  );

  const handleSelectedUser = useCallback(
    (uuid: string) => {
      setSelectedUserId(uuid);
      setToggleModalUser();
    },
    [setToggleModalUser],
  );

  const handleOnEndReached = () => {
    if (!loading) {
      filterUsers();
    }
  };

  const resultsFiltered = useMemo(
    () =>
      results.filter(item =>
        replaceSpecialCharacters(
          `${item.name?.first.toLowerCase()} ${item.name?.last.toLowerCase()}`,
        ).includes(replaceSpecialCharacters(searchText.toLowerCase())),
      ),
    [results, searchText],
  );

  const _renderLoading = () =>
    Array.from({length: 6}, (_, i) => {
      i + 1;
      return (
        <S.ContainerLoading key={i}>
          <Loading />
        </S.ContainerLoading>
      );
    });

  const _renderItem = ({item}: any) => (
    <Item user={item} onPress={handleSelectedUser} />
  );

  const _renderFooterComponent = () => <S.LoadingMore />;

  const _renderEmptyComponent = () => <S.EmptyText>Not found :(</S.EmptyText>;

  useEffect(() => {
    filterUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (filter?.gender) {
      filterUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={imgLogo} resizeMode="contain" />
      </S.Header>
      <S.Form>
        <S.ContainerInput>
          <InputText
            placeholder="Search Name"
            iconRight={<S.IconRight name="account-search" />}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setSearchText}
            value={searchText}
          />
        </S.ContainerInput>
        <S.ButtonFilter onPress={setToggleModalFilter} activeOpacity={0.5}>
          <S.IconFilter name="filter" />
        </S.ButtonFilter>
      </S.Form>

      {loading && nextPage === 1 ? (
        _renderLoading()
      ) : (
        <S.List
          data={resultsFiltered}
          keyExtractor={(_, index) => String(index)}
          renderItem={_renderItem}
          onEndReachedThreshold={0.1}
          onEndReached={handleOnEndReached}
          ListFooterComponent={
            resultsFiltered.length > 20 ? _renderFooterComponent : <Fragment />
          }
          ListEmptyComponent={_renderEmptyComponent}
        />
      )}

      {userDetail?.gender && (
        <ModalUserDetail
          visible={toggleModalUser}
          onClose={setToggleModalUser}
          user={userDetail}
        />
      )}

      <ModalFilter
        defaultValues={filter}
        visible={toggleModalFilter}
        onClose={setToggleModalFilter}
        onSubmit={handleSubmitFilter}
      />
    </S.Container>
  );
};

export default Home;
