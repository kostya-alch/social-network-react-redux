import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Prealoder/Preloader'


class UsersContainer extends Component {


   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
         withCredentials: true
      })
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }
   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
         withCredentials: true
      })
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)

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
      isFetching: state.userPage.isFetching

   }
}


export default connect(MapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount: setUsersTotalCount,
   toggleIsFetching: toggleIsFetching
})(UsersContainer)