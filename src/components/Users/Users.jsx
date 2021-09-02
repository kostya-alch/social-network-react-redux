import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            photoUrl: 'https://static.zerochan.net/Uchiha.Sasuke.full.1399808.jpg',
            followed: false,
            fullName: 'Konstantin',
            status: 'hi!',
            location: { city: 'Minsk', country: 'Belarus' }
         },
         {
            id: 2,
            photoUrl: 'https://static.zerochan.net/Uchiha.Sasuke.full.1399808.jpg',
            followed: true,
            fullName: 'Ivan',
            status: 'hi!',
            location: { city: 'Moscow', country: 'Russia' }
         },
         {
            id: 3,
            photoUrl: 'https://static.zerochan.net/Uchiha.Sasuke.full.1399808.jpg',
            followed: false,
            fullName: 'Segrey',
            status: 'buy',
            location: { city: 'Kiev', country: 'Ukraine' }
         }
      ]
      )
   }

   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} alt='userPhoto' className={styles.userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => {
                        props.unfollow(u.id)
                     }}>Unfollow</button>
                     : <button onClick={() => {
                        props.follow(u.id)
                     }}>Follow</button>}

               </div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users;