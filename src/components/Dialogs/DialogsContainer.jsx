
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/authRedirect'
import { sendMessegeCreator, } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'





const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (newMessageBody) => {
         dispatch(sendMessegeCreator(newMessageBody))
      },
   }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)
   (Dialogs)

