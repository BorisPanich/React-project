import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getUsersProfile, ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {DataUserType} from "../../redux/authReducer";
import {usersAPI} from "../api/API";

type PathPropsType = {
    userId: string //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

type MapStatePropsType = {
    profile: ProfileType | null //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

type MapDispatchToPropsType = {
    setUsersProfile: (data: DataUserType) => void
    getUsersProfile: (userId: number) => void        //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathPropsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId); //+
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(response => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUsersProfile(response.data);
        })
        // this.props.getUsersProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile, getUsersProfile})(WithUrlDataContainerComponent)
