import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getStatus, getUsersProfile, ProfileType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathPropsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathPropsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId; // Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReduxState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer));
// export const connect(mapStateToProps, {getUsersProfile})(withRouter(withAuthRedirect(ProfileContainer)))

export default compose<ComponentType> (
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);
