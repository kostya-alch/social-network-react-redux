import React, { useEffect, useState } from 'react'



const ProfileStatusHooks = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const editModeActivated = () => {
      setEditMode(true)
   }

   const editModeDeactivated = () => {
      setEditMode(false)
      props.updateStatus(status)
   }


   const updateStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }


   return (
      <div>
         <div>
            {!editMode &&
               <span onClick={editModeActivated}>{props.status || '-----'}</span>
            }
         </div>
         <div>
            {editMode &&
               <input onChange={updateStatusChange} autoFocus={true} onBlur={editModeDeactivated} type="text" value={status} />
            }
         </div>
      </div>

   )
}


export default ProfileStatusHooks