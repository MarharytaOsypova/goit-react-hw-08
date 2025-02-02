import { useDispatch } from 'react-redux';
 
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import styles from './Contact.module.css';
import { deleteContact } from './../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <p>
          <BsFillPersonFill size="20" /> {name}
        </p>
        <p>
          <BsFillTelephoneFill size="18" /> {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;