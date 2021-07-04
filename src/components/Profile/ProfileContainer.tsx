import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {
    getStatus,
    getUsersProfile,
    // updateUserStatus,
    ProfileType,
    savePhoto,
    saveProfile
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getIsAuth, getProfile,
    getStatusSelector, getMyUserId
} from '../../redux/selectors';

type PathPropsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
    myUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PropsType = RouteComponentProps<PathPropsType> & MapStatePropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let id = +this.props.match.params.userId; // Number(this.props.match.params.userId)
        let userId = id ? id : this.props.myUserId

        if (!userId) {
            // this.props.history.push('/login')
        }
        // if (!userId) {
        //     userId = JSON.stringify(this.props.isAuth)
        //     if(!userId) {
        //         this.props.history.push("/login")
        //     }
        // }

        this.props.getUsersProfile(userId!);
        this.props.getStatus(userId!);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         // updateUserStatus={this.props.updateUserStatus}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxState): MapStatePropsType => {
    return {
        profile: getProfile(state),
        status: getStatusSelector(state),
        myUserId: getMyUserId(state),
        isAuth: getIsAuth(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, savePhoto, saveProfile}),
    // connect(mapStateToProps, {getUsersProfile, getStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
