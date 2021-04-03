import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootReduxState} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsToRediretType = {
    isAuth: boolean
}
const mapStatePropsForRediret = (state: RootReduxState): MapStatePropsToRediretType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsToRediretType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T} />
    }

    let ConnectAuthRedirectComponent = connect(mapStatePropsForRediret)(RedirectComponent)

    return ConnectAuthRedirectComponent;
}