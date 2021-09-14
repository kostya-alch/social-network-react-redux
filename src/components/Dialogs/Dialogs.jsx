import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm'




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



export default Dialogs