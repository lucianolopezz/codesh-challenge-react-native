import React from 'react';

import nationalities from '../../../../services/nationalities';
import {InputRadio} from '../../../../components/Form';
import Button from '../../../../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';

import * as S from './styles';

interface Values {
  gender?: string;
  nat?: string;
}

interface ModalFilterProps {
  visible: boolean;
  defaultValues: Values;
  onSubmit: (values: Values) => void;
  onClose: () => void;
}

const schema = Yup.object().shape({
  gender: Yup.string().required(),
  nat: Yup.string().required(),
});

const ModalFilter = ({
  visible,
  defaultValues,
  onSubmit,
  onClose,
}: ModalFilterProps) => (
  <S.Modal animationType="fade" transparent visible={visible}>
    <S.Container>
      <S.Content>
        <S.ContainerAvatar />
        <S.ButtonClose activeOpacity={0.5} onPress={onClose}>
          <S.IconClose name="close" />
        </S.ButtonClose>
        <Formik
          initialValues={{
            gender: defaultValues?.gender,
            nat: defaultValues?.nat,
          }}
          validationSchema={schema}
          onSubmit={values => onSubmit(values)}>
          {({handleSubmit, setFieldValue, values, isValid}) => (
            <S.Body>
              <S.Wrapper>
                <S.Row>
                  <S.RadioGroup>
                    <InputRadio
                      active={values.gender === 'female'}
                      onPress={() => setFieldValue('gender', 'female')}
                    />
                    <S.Label>Female</S.Label>
                  </S.RadioGroup>
                  <S.RadioGroup>
                    <InputRadio
                      active={values.gender === 'male'}
                      onPress={() => setFieldValue('gender', 'male')}
                    />
                    <S.Label>Male</S.Label>
                  </S.RadioGroup>
                </S.Row>

                <S.Select
                  defaultButtonText="Select nationality"
                  defaultValueByIndex={nationalities.findIndex(
                    nat => nat === values?.nat,
                  )}
                  data={nationalities}
                  onSelect={selectedItem => setFieldValue('nat', selectedItem)}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                />
              </S.Wrapper>

              <S.Footer>
                <Button
                  title="Submit"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </S.Footer>
            </S.Body>
          )}
        </Formik>
      </S.Content>
    </S.Container>
  </S.Modal>
);

export default ModalFilter;
