import React from 'react'



class ProfileStatus extends React.Component {

   state = {
      editMode: false
   }
   editModeActivated = () => {
      this.setState({ editMode: true })
   }

   editModeDeactivated = () => {
      this.setState({ editMode: false })
   }
   render() {

      return (
         <div>
            <div>
               {!this.state.editMode &&
                  <span onClick={this.editModeActivated}>{this.props.status}</span>
               }
            </div>
            <div>
               {this.state.editMode &&
                  <input autoFocus={true} onBlur={this.editModeDeactivated} type="text" value={this.props.status} />
               }
            </div>
         </div>

      )
   }
}

export default ProfileStatus