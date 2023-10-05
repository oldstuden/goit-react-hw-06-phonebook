import styled from 'styled-components';
import { Form, Field, ErrorMessage, Formik } from 'formik';

export const ContactForm = styled(Form)`
  display: flex;
  flex-flow: column;
  width: 400px;
  border: 1px solid #000;
  border-radius: 12px;
  padding: 12px;
`;
export const FieldForm = styled(Field)`
  width: 80%;
  margin-top: 8px;
  display: flex;
  padding: 10px;
`;

export const Wrap = styled(Formik)`
  margin-bottom: 12px;
`;
export const ErrMessage = styled(ErrorMessage)`
  margin-top: 8px;
  color: #ff0000;
`;
export const LabelForm = styled.label`
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const Buttons = styled.button`
  width: 50%;
  padding: 8px 0;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #33ffff;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #60e160;
  }
`;
