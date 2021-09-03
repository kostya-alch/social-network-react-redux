import * as axios from 'axios';
import React, { Component } from 'react';
import styles from './users.module.css';
import UserPhoto from '../../assets/images/Userphoto.png'


class Users extends Component {
   constructor(props) {
      super(props)
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items)
         })
   }
   render() {
      return <div>
         {
            this.props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photos.small != null ? u.photos.small : UserPhoto} alt='userPhoto' className={styles.userPhoto} />
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => {
                           this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                           this.props.follow(u.id)
                        }}>Follow</button>}

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
}

export default Users