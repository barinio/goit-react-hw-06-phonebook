import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FormButton, FormContainer, Input, Label } from './FormContacts.styled';
import { addContact } from 'redux/contactsReducer';

const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numReg =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().matches(nameReg, 'Not valid').required('Required'),
  number: yup.string().matches(numReg, 'Not valid').required('Required'),
});

export const FormContacts = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <FormContainer>
        <Label>
          Name
          <Input type="text" name="name" placeholder="John" />
          <ErrorMessage name="name" component={'p'} />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="123-45-67" />
          <ErrorMessage name="number" component={'p'} />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </FormContainer>
    </Formik>
  );
};
