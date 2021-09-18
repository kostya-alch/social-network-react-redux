import { Formik, Form, } from 'formik';
import React from 'react'
import { FormField } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = (props) => {
   return (
      <Formik
         initialValues={props.profile}
         onSubmit={(values, { setSubmitting, setFieldError, setStatus }) => {
            props.saveProfile(values, setSubmitting, setFieldError, setStatus);
            props.onSubmit();
         }}
      >
         {({ status, ...props }) => (
            <Form>
               <button type='submit'>Save</button>
               <span>{status}</span>

               <FormField
                  type='text'
                  placeholder={props.values.fullName}
                  label='Full name'
                  name='fullName'
                  as='input'
               />

               <FormField
                  type='text'
                  placeholder={props.values.aboutMe}
                  label='About Me'
                  name='aboutMe'
                  as='input'
               />

               <FormField
                  type='checkbox'
                  placeholder={props.values.lookingForAJob}
                  label='Am I look for a job? '
                  name='lookingForAJob'
                  as='input'
               />

               <FormField
                  type='text'
                  placeholder={props.values.lookingForAJobDescription}
                  label='My professional skills: '
                  name='lookingForAJobDescription'
                  as='input'
               />
               {Object.keys(props.values.contacts)
                  .map(key => {
                     return <FormField
                        key={key}
                        type='text'
                        placeholder={props.values.contacts[key]}
                        label={key}
                        name={'contacts.' + key}
                        as='input'
                     />
                  })
               }
            </Form>
         )}
      </Formik>
   )
}

export default ProfileDataForm