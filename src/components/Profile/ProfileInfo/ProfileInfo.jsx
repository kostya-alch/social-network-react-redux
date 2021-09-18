import React, { useState } from 'react'
import Preloader from '../../common/Prealoder/Preloader'
import styles from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/UserPhoto.png'
import ProfileStatusHooks from './ProfileStatusHooks'
import ProfileDataForm from './ProfileDataForm'



const ProfileInfo = (props) => {
   const [editMode, setEditMode] = useState(false)
   if (!props.profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }
   }

   const onSubmit = (formData) => {
      props.saveProfile(formData)
         .then(() => {
            setEditMode(false)
         })

   }
   return (
      <div>
         <div className={styles.descriptionBlock}>
            <img src={props.profile.photos.small || userPhoto} alt={'user-img'} className={styles.mainPhoto} />
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            {editMode
               ? <ProfileDataForm {...props} onSubmit={onSubmit} />
               : <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner} />}
            <ProfileStatusHooks savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>

   )
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div><span>Меня зовут: {profile.fullName} </span></div>

      <div><b>Ищу ли работу</b>:
         {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
         <div><b>My professional skills</b>:
            {profile.lookingForAJobDescription}
         </div>
      }
      <div><b>Обо мне</b>:
         {profile.aboutMe}
      </div>
      <strong>Contacts: </strong>
      {Object.keys(profile.contacts).map(key => {
         return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
   </div>

}



const Contacts = ({ constactTitle, contactValue }) => {
   return <div className={styles.contacts}><b>{constactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo