import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
 
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = ( ) => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field className={styles.input} id="name" name="name" type="text" />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label className={styles.label} htmlFor="number">Number</label>
        <Field className={styles.input} id="number" name="number" type="text" />
        <ErrorMessage className={styles.error} name="number" component="div" />

        <button className={styles.submitButton} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;