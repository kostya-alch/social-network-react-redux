import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = (props) => {
   return (
      <header className={styles.header}>
         <img src="https://img2.freepng.ru/20180619/yhv/kisspng-linkedin-social-media-business-social-network-blog-5b292f6aca6f36.1644028915294257708292.jpg" alt="img" />
         <div className={styles.loginBlock}>
            {props.isAuth
               ? props.login
               : <NavLink to={'/login/'}>
                  Login
               </NavLink>}
         </div>
      </header>)
}

export default Header