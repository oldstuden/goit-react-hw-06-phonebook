import { useSelector } from 'react-redux';
import { List, ListItem } from './ListContact.styled';
import { Contact } from 'components/Contact/Contact';
// import { deleteContact } from 'redux/actions';

export const ListContact = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <div>
      <List>
        {contacts.map(item => (
          <ListItem key={item.id}>
            <Contact contact={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
