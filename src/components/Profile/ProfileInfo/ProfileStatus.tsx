import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: any
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activeEditeMode() {
        this.setState({
            editeMode: true
        })
    }
    deactiveEditeMode() {
        this.setState({
            editeMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activeEditeMode.bind(this)}>{this.props.status}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={this.deactiveEditeMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;