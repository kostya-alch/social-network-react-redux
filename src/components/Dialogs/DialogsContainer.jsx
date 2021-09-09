
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/authRedirect'
import { sendMessegeCreator, updateMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'





const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
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

let authRedirectComponent =withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)
export default DialogsContainer