import React from 'react'
import { sendMessegeCreator, updateMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessegeCreator())
   }

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateMessageBodyCreator(body))
   }

   return (
      <Dialogs updateMessageBody={onNewMessageChange}
         sendMessage={onSendMessageClick}
         dialogsPage={state} />
   )
}

export default DialogsContainer