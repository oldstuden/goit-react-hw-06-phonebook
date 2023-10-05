import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;
export const DelBtn = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  background-color: #33ffff;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #f67417;
  }
`;
