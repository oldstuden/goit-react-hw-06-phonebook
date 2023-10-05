import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const LabelForm = styled.label`
  color: black;
  margin: 0;
  margin-bottom: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
`;

export const Search = styled.input`
  display: flex;
  padding: 10px;
`;

export const ResetButtons = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background-color: #33ffff;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #60e160;
  }
`;

export const LabelContacts = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
`;
