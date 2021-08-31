import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessegeCreator, updateMessageBodyCreator } from '../../redux/dialogs-reducer'



const Dialogs = (props) => {
   let state = props.store.getState().dialogsPage
   let dialogsElements = state.dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

   let messagesElements = state.messages
      .map(message => <Message message={message.message} />)

   let newMessageBody = state.newMessageBody

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessegeCreator())
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value
      props.store.dispatch(updateMessageBodyCreator(body))
   }

   return (
      <div>
         <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={styles.messages}>
               {messagesElements}
               <div>
                  <div>
                     <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message' />
                  </div>
                  <div>
                     <button onClick={onSendMessageClick}>Send message</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs