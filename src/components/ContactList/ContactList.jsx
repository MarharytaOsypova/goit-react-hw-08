import { useSelector } from 'react-redux';
 
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from './../../redux/contacts/selectors';

const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
