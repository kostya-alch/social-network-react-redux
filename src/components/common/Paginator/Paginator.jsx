import React from "react";
import styles from './Paginator.module.css'


const Paginator = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return <div>
      <div className={styles.pageNumbers}>
         {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage + ' ' + styles.pageElem}
               onClick={() => { props.onPageChange(p) }
               }>{p} </span>
         })}
      </div>
   </div>
}

export default Paginator;