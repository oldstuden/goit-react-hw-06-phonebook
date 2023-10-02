import * as yup from 'yup';
import {
  FieldForm,
  ContactForm,
  Wrap,
  LabelForm,
  Buttons,
  ErrMessage,
} from './UserForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  contacts: yup.array(),
  number: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(10, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

const initialValue = {
  name: '',
  number: '',
};

export const UserForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (formData, { resetForm }) => {
    const { name, number } = formData;
    dispatch(addContact(name, number));
    resetForm();
  };
  return (
    <div>
      <Wrap
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <ContactForm>
          <LabelForm>
            Name
            <FieldForm type="text" name="name" />
            <ErrMessage name="name" component="p" />
          </LabelForm>
          <LabelForm>
            Phone number
            <FieldForm type="tel" name="number" required />
            <ErrMessage name="number" component="p" />
          </LabelForm>
          <Buttons type="submit">Add to contact</Buttons>
        </ContactForm>
      </Wrap>
    </div>
  );
};
