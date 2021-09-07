import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleFollowingProgress, toggleIsFetching, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Prealoder/Preloader'
import { usersAPI } from '../../api/api'


class UsersContainer extends Component {


   componentDidMount() {
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
      });
   }

   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)


      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)

         })
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
               toggleFollowingProgress={this.props.toggleFollowingProgress}
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


export default connect(MapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount: setUsersTotalCount,
   toggleIsFetching: toggleIsFetching,
   toggleFollowingProgress,

})(UsersContainer)