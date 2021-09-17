import React from 'react'
import Preloader from '../../common/Prealoder/Preloader'
import styles from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/UserPhoto.png'
import ProfileStatusHooks from './ProfileStatusHooks'


const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }
   }
   return (
      <div>
         <div className={styles.descriptionBlock}>
            <img src={props.profile.photos.small || userPhoto} alt={'user-img'} className={styles.mainPhoto} />
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            <ProfileStatusHooks savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus} />
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