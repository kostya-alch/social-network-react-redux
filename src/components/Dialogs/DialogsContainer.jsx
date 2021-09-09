
import { connect } from 'react-redux'
import { sendMessegeCreator, updateMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'




const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateMessageBody: (body) => {
         dispatch(updateMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessegeCreator())
      },
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer