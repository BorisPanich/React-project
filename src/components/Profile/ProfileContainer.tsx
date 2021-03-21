import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {setUsersProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathPropsType = {
    userId: any //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

type MapStatePropsType = {
    profile: any //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
type MapDispatchToPropsType = {
    setUsersProfile: (profile: any) => void //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathPropsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUsersProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
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

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)
