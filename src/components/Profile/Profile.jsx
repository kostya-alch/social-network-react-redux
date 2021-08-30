import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.css'
const Profile = (props) => {

   return (
      <div className={styles.content}>
         <ProfileInfo />
         <MyPosts dispatch={props.dispatch}
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
         />
      </div>
   )
}

export default Profile