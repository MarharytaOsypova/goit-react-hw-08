 import { Field, Form, Formik } from "formik"
import css from "./RegistrationForm.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { registerThunk } from "../../redux/auth/operations"
 

const RegistrationForm = () => {
      const initialValues = {
         name: "",
        email: "",
       password: "",
    }
  const dispatch = useDispatch();
   const navigate = useNavigate()
  const handleSubmit = (values, options) => {
      dispatch(registerThunk(values)).unwrap().then(()=> navigate ("/"))
    options.resetForm();
    
    }
  
  return (
    <div className={css.formik} >
            <h3>Register</h3>
                <Formik initialValues={initialValues}
                onSubmit={handleSubmit}>
              <Form className={css.form} >
                  <label className={css.label}>
              <span>Name:</span>
                  <Field className={css.input} name="name"/>             
                        </label> 
               <label className={css.label}>
              <span>Email:</span>
                  <Field className={css.input} name="email"/>             
                        </label> 
              <label  className={css.label}>
              <span>Password:</span>
                  <Field className={css.input} name="password" type="password"/>             
                        </label>       
          <button className={css.submitButton} type="submit">Register</button>  
          <p>You already have an account ? <Link to ="/login">Login</Link> </p>  
          </Form>       
      
      
          </Formik>
    </div>
  )
}

export default RegistrationForm