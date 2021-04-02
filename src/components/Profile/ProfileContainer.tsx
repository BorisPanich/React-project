import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getUsersProfile, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathPropsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    // setUsersProfile: (data: DataUserType) => void
    getUsersProfile: (userId: number) => void
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
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state: RootReduxState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)
