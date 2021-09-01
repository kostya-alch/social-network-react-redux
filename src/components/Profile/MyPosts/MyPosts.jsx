import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

   let posts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

   let newPostElement = React.createRef()

   let onAddPost = () => {
      props.addPost()
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
   }
   return (
      <div className={styles.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}
               />
            </div>
            <div>
               <button onClick={onAddPost} >Add Post</button>
            </div>
         </div>
         <div className={styles.posts}>
            {posts}
         </div>

      </div>
   )
}

export default MyPosts