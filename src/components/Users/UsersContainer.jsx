import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, toggleFollowingProgress, unfollow, getUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Prealoder/Preloader'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersPage } from '../../redux/users-selectors'





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
      users: getUsersPage(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose(

   connect(MapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)

