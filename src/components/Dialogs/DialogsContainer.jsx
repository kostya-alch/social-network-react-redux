
import { connect } from 'react-redux'
import { compose } from 'redux'
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

export default compose(connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)
   (Dialogs)

