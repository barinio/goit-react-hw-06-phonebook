import { FormContacts } from './components/FormContacts/FormContacts';
import { Section } from './components/Section/Section';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';
import { Notification } from './components/Notification/Notification';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title="Phonebook">
        <FormContacts />
      </Section>
      <Section title="Contacts">
        {contacts?.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <Notification message={'There is no contacts!'} />
        )}
      </Section>
      <ToastContainer />
    </>
  );
};
