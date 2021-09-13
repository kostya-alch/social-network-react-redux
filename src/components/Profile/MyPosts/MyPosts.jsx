import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

   let posts = props.posts.map(post =>
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />)


   let addPost = (values) => {
      props.addPost(values.newPostText)
   }
   return (
      <div className={styles.postsBlock}>
         <h3>My posts</h3>
         <AddPostFormRedux onSubmit={addPost} />
         <div className={styles.posts}>
            {posts}
         </div>

      </div>
   )
}

const AddPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name='newPostText' component='textarea' />
         </div>
         <div>
            <button >Add Post</button>
         </div>
      </form>
   )
}

const AddPostFormRedux = reduxForm({ form: 'AddPostFormRedux' })(AddPostForm)
export default MyPosts