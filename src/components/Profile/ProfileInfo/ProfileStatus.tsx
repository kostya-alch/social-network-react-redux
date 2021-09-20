import React, { ChangeEvent } from 'react';

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  editModeActivated = () => {
    this.setState({ editMode: true });
  };

  editModeDeactivated = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  updateStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          {!this.state.editMode && (
            <span onClick={this.editModeActivated}>
              {this.props.status || '-----'}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
              onChange={this.updateStatusChange}
              autoFocus={true}
              onBlur={this.editModeDeactivated}
              type="text"
              value={this.state.status}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
