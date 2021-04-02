import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {RootReduxState} from "../redux/redux-store";
import {ProfileType} from "../redux/profileReducer";
import {connect} from "react-redux";

type MapStatePropsToRediretType = {
    isAuth: boolean
}

const mapStatePropsForRediret = (state: RootReduxState): MapStatePropsToRediretType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {          //!!!!!!!!!!!!!!!!!!!!!

    class RedirectComponent extends React.Component<any, any> {  //!!!!!!!!!!!!!!!!!!!
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStatePropsForRediret)(RedirectComponent)

    return ConnectAuthRedirectComponent;
}