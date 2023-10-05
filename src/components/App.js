import { Filter } from './ContactFilter/ContactFilter';
import { GlobalStyle } from './GlobalStyle';
import { ListContact } from './ListContact/ListContact';
import { UserForm } from './UserForm/UserForm';

export const App = () => {
  return (
    <div>
      <h1>Phone book</h1>
      <UserForm />
      <h2>Contact</h2>
      <Filter />
      <ListContact />
      <GlobalStyle />
    </div>
  );
};
