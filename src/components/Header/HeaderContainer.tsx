import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {DataUserType, setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../api/API";

type MSTPType = {
    state: DataUserType
    isAuth: boolean
    currentPage: number
    pageSize: number
    // isFetching: boolean
}
type MDTPType = {
    setAuthUserData: (data: DataUserType) => void
    // toggleIsFetching: (isFetching: boolean) => void
}

export type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {withCredentials: true}

        authAPI.me().then(response => {
            // this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return <>
            <Header  {...this.props} />
        </>
    }
}

const mapStateToProps = (state: RootReduxState): MSTPType => {
    return {
        state: state.auth.dataUser,
        isAuth: state.auth.isAuth,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
        // login: state.auth.login,
        // email: state.auth.email
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);