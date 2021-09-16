import React from "react";
import styles from './users.module.css'
import UserPhoto from '../../assets/images/userPhoto.png'
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const Users = (props) => {


   return <div>
      <Paginator onPageChange={props.onPageChange} currentPage={props.currentPage}
         totalUsersCount={props.totalUsersCount}
         pageSize={props.pageSize}
      />
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profiles/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : UserPhoto} alt='userPhoto' className={styles.userPhoto} />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button disabled={props.followingInProgress
                        .some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }}>
                        Unfollow</button>
                     : <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.follow(u.id) }}>
                        Follow</button>}

               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users;