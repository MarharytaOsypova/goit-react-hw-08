import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/slice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

 

const ContactsPage = () => {

    const dispatch = useDispatch();;
  useEffect(() => {

    dispatch(fetchContacts());
   }, [dispatch]);
 
   const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
 
  return (
    <div>
      <h1>Phonebook</h1>
        <ContactForm  />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p> Error: {error} </p>}
      <ContactList />
    </div>
  )
}

export default ContactsPage
