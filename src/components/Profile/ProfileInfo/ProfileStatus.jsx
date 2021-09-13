import React from 'react'



class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }
   editModeActivated = () => {
      this.setState({ editMode: true })
   }

   editModeDeactivated = () => {
      this.setState({
         editMode: false
      });
      this.props.updateStatus(this.state.status)
   }


   updateStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      });

   }
   render() {

      return (
         <div>
            <div>
               {!this.state.editMode &&
                  <span onClick={this.editModeActivated}>{this.props.status || '-----'}</span>
               }
            </div>
            <div>
               {this.state.editMode &&
                  <input onChange={this.updateStatusChange} autoFocus={true} onBlur={this.editModeDeactivated} type="text" value={this.state.status} />
               }
            </div>
         </div>

      )
   }
}

export default ProfileStatus