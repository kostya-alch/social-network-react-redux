import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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


let authRedirectComponent = withAuthRedirect(ProfileContainer)


let withRouterDataContainerComponent = withRouter(authRedirectComponent)
const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
})


export default connect(mapStateToProps, { getUserProfile })(withRouterDataContainerComponent)