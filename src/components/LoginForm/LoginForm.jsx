import { Field, Form, Formik } from "formik"
import css from "./LoginForm.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginThunk } from "../../redux/auth/operations"
 

const LoginForm = () => {
    const initialValues = {
        email: "",
        password: "",
    }
    
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (values, options) => {
      dispatch(loginThunk(values)).unwrap().then(()=> navigate ("/"))
        options.resetForm();
    }

  return (
    <div className={css.formik} >
      <h3>Login</h3>
          <Formik initialValues={initialValues}
          onSubmit={handleSubmit}>
        <Form className={css.form} >
          
         <label className={css.label}>
        <span>Email:</span>
            <Field className={css.input} name="email"/>             
                  </label> 
        <label  className={css.label}>
        <span>Password:</span>
            <Field className={css.input} name="password" type="password"/>             
                  </label>       
          <button className={css.submitButton} type="submit">Login</button>  
     <p>You do not have an account ? <Link to ="/register">Let is create!</Link> </p>      
    </Form>       


    </Formik>
    </div>
  )
}

export default LoginForm