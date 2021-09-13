import React from 'react'
import Preloader from '../../common/Prealoder/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         {/* <div>
            <img width='200px' src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612768484_140-p-fon-golubogo-morya-184.jpg" alt="" />
         </div> */}
         <div className={styles.descriptionBlock}>
            <img src={props.profile.photos.small} alt={'user-img'} />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
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