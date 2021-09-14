import React from "react";
import { Formik } from "formik";
import styles from './Login.module.css'
import { loginFormSchema } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";



const Login = (props) => {
   if (props.isAuth) {
      return <Redirect to={'/profiles'} />
   }
   return (<div>

      <Formik
         initialValues={{ email: "", password: "", rememberMe: true }}
         validateOnBlur
         onSubmit={(values, {setStatus}) => {  props.login(values.email, values.password, values.rememberMe, setStatus) }}
         validationSchema={loginFormSchema}

      >
         {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
            <div className={styles.container}>
               <div className={styles.header}><h1><span>Login</span></h1></div>
               <p>
                  <label htmlFor={'name'}> Email </label> <br />
                  <input
                     type={'text'}
                     name={'email'}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}

                  />
               </p>
               {touched.email && errors.email && <p>{errors.email}</p>}

               <p>
                  <label htmlFor={'password'}> Пароль </label> <br />
                  <input
                     type={'password'}
                     name={'password'}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}

                  />
               </p>
               {touched.password && errors.password && <p>{errors.password}</p>}
               <div className={styles.lower}>
                  <p>
                     <input
                        type={'checkbox'}
                        name={'rememberMe'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rememberMe}

                     /><label className={styles.check} htmlFor={'rememberMe'}> Remember me? </label>
                  </p>

                  <div>{status}</div>
                  <button disabled={!isValid && !dirty}
                     onClick={handleSubmit}
                     type={'submit'}>Send</button>
               </div>
            </div>
         )}

      </Formik>

   </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)




