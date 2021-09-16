import React from 'react'
import Preloader from '../../common/Prealoder/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileStatusHooks from './ProfileStatusHooks'


const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className={styles.descriptionBlock}>
            <img src={props.profile.photos.small} alt={'user-img'} />
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
            <div><span>Меня зовут: {props.profile.fullName} </span></div>
            <div>{props.profile.aboutMe}</div>
            <span>Ищу ли работу:
               <span>{props.profile.lookingForAJobDescription}</span>
            </span>
         </div>
      </div>

   )
}

export default ProfileInfo