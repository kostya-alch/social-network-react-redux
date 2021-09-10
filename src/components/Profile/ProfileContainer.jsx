import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/authRedirect'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 2;
      }
      this.props.getUserProfile(userId)
   }
   render() {

      return (
         <div >
            <Profile {...this.props} profile={this.props.profile} />
         </div>
      )
   }
}
const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, withAuthRedirect)
   (ProfileContainer)


