import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, toggleFollowingProgress, unfollow, getUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Prealoder/Preloader'
import { withAuthRedirect } from '../../hoc/authRedirect'
import { compose } from 'redux'





class UsersContainer extends Component {


   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChange = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
   }
   render() {



      return <>
         {this.props.isFetching ?
            <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChange={this.onPageChange}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               users={this.props.users}
               followingInProgress={this.props.followingInProgress}
            />}
      </>
   }
}

let MapStateToProps = (state) => {
   return {
      users: state.userPage.users,
      pageSize: state.userPage.pageSize,
      totalUsersCount: state.userPage.totalUsersCount,
      currentPage: state.userPage.currentPage,
      isFetching: state.userPage.isFetching,
      followingInProgress: state.userPage.followingInProgress

   }
}

export default compose(
   withAuthRedirect,
   connect(MapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)

