import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {AuthStateType, setAuthUserData} from "../../redux/authReducer";
import {Preloader} from "../common/Preloader/Preloader";

type MSTPType = {
    state: AuthStateType
    // isFetching: boolean
}
type MDTPType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    // toggleIsFetching: (isFetching: boolean) => void
}

export type HeaderContainerPropsType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {withCredentials: true}).then(response => {
            // this.props.toggleIsFetching(false);
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email)
            }
        })
    }

    render() {

        return <>
            {/*{this.props.isFetching ? <Preloader/> : null}*/}
            <Header {...this.props.state} />
        </>
    }
}

const mapStateToProps = (state: RootReduxState): MSTPType => {
    debugger;
    return {
        state: state.auth
        // isAuth: state.auth.isAuth,
        // login: state.auth.login,
        // email: state.auth.email,
        // isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);