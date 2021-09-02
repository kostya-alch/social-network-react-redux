
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'


let MapStateToProps = (state) => {
   return {
      users: state.userPage.users
   }
}

let MapDispatchToProps = (dispatch) => {

   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(Users)