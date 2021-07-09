import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validations";
import {createField, FormElementInput} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootReduxState} from "../../redux/redux-store";
import styles from "./../common/FormControls/FormsControls.module.css";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const maxLength30 = maxLength(30);
const minLength2 = minLength(2, 30);

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", 'email', [required], FormElementInput)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], FormElementInput, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], FormElementInput, {type: "checkbox"}, "remember me")}

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], FormElementInput, {}) }


            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state: RootReduxState): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);