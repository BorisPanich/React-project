import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getStatus, getUsersProfile, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathPropsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
    myUserId: any           //!!!!!!!!!!!!!!!!
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
}

type PropsType = RouteComponentProps<PathPropsType> & MapStatePropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId; // Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                // this.props.history.push('/login')        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.dataUser.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType> (
    connect(mapStateToProps, {getUsersProfile, getStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);
