import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getAuthUserDataTh, logout} from "../../redux/authReducer";
import {getIsAuth, getLogin} from '../../redux/selectors';

type MSTPType = {
    isAuth: boolean
    login: string | null | undefined            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // isFetching: boolean
}
type MDTPType = {
    getAuthUserDataTh: () => void
    logout: () => void
    // toggleIsFetching: (isFetching: boolean) => void
}

export type HeaderContainerPropsType = MSTPType & MDTPType

const HeaderContainer: React.FC<HeaderContainerPropsType> = ({ isAuth, getAuthUserDataTh, login, logout}) => {

    getAuthUserDataTh();
    return (
        <Header isAuth={isAuth} login={login} logout={logout}/>
    )
}

const mapStateToProps = (state: RootReduxState): MSTPType => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect(mapStateToProps, {getAuthUserDataTh, logout})(HeaderContainer)