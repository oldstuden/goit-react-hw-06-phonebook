import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <p>
        {contact.name} : {contact.number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
