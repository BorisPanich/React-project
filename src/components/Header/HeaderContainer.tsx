import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {DataUserType, getAuthUserDataTh} from "../../redux/authReducer";

type MSTPType = {
    state: DataUserType
    isAuth: boolean
    currentPage: number
    pageSize: number
    // isFetching: boolean
}
type MDTPType = {
    // setAuthUserData: (data: DataUserType) => void
    getAuthUserDataTh: () => void
    // toggleIsFetching: (isFetching: boolean) => void
}

export type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTh()
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

export default connect(mapStateToProps, {getAuthUserDataTh})(HeaderContainer);