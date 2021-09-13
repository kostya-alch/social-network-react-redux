import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'



const Dialogs = (props) => {
   let state = props.dialogsPage

   let dialogsElements = state.dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

   let messagesElements = state.messages
      .map(message => <Message message={message.message} />)

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
   }

   return (
      <div>
         <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={styles.messages}>
               {messagesElements}
               <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
         </div>
      </div>
   )
}


const addMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component='textarea' name="newMessageBody"
               placeholder='Enter your message' />
         </div>
         <div>
            <button >Send message</button>
         </div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(addMessageForm)
export default Dialogs