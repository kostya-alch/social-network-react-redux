import React from 'react'
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img width='200px' src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612768484_140-p-fon-golubogo-morya-184.jpg" alt="" />
         </div>
         <div className={styles.descriptionBlock}>
            ava+description
         </div>
      </div>

   )
}

export default ProfileInfo