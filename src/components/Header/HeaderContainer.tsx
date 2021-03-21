import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {DataUserType, setAuthUserData} from "../../redux/authReducer";
import {Preloader} from "../common/Preloader/Preloader";

type MSTPType = {
    state: DataUserType
    isAuth: boolean
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {withCredentials: true}).then(response => {
            // this.props.toggleIsFetching(false);
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData({id, login, email})
            }})}

    render() {
        return <>
            {/*{this.props.isFetching ? <Preloader/> : null}*/}
            <Header  {...this.props} />
        </>
    }}

const mapStateToProps = (state: RootReduxState): MSTPType => {
    return {
        state: state.auth.dataUser,
        isAuth: state.auth.isAuth,
        // login: state.auth.login,
        // email: state.auth.email
    }}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);