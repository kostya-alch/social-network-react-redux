import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

   return (
      <div className={s.item}>
         <img src='https://i.pinimg.com/736x/0b/5b/ae/0b5bae36ccb18c899762ba0b6695d9ac.jpg' alt='img' />
         {props.message}
         <div>
            <span>like:{props.likesCount}</span>
         </div>
      </div>
   )
}

export default Post;