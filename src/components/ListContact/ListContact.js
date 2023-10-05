import { useDispatch, useSelector } from 'react-redux';
import { DelBtn, List, ListItem } from './ListContact.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ListContact = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <DelBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DelBtn>
        </ListItem>
      ))}
    </List>
  );
};
