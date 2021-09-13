import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from './Login.module.css'


const Login = () => (
   <div>
      <Formik
         initialValues={{ email: "", password: "", rememberMe: true }}
         validateOnBlur
         onSubmit={(values) => { console.log(values) }}
         validationSchema={loginFormSchema}
      >
         {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
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


                  <button disabled={!isValid && !dirty}
                     onClick={handleSubmit}
                     type={'submit'}>Send</button>
               </div>
            </div>
         )}

      </Formik>


   </div>
);



const loginFormSchema = Yup.object().shape({
   email: Yup.string()
      //минимальная длина - 2 символа
      .min(2, "Must be longer than 2 characters")
      //максимальная длина - 20 символов
      .max(20, "Nice try, nobody has a first name that long")
      .required("Required"),
   password: Yup.string()
      .min(8, "Must be longer than 8 characters")
      .required("Required")
});



export default Login