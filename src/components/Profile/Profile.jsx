import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.css'
const Profile = (props) => {

   return (
      <div className={styles.content}>
         <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status}
            updateStatus={props.updateStatus} />
         <MyPostsContainer store={props.store}
         />
      </div>
   )
}

export default Profile