import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validations";
import {FormElementInput} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootReduxState} from "../../redux/redux-store";
import styles from "./../common/FormControls/FormsControls.module.css";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const maxLength30 = maxLength(30);
const minLength2 = minLength(2, 30);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*{createField("Login", "login", [required, minLength2, maxLength30], FormElementInput)}*/}
            {/*{createField("Password", "password", [required, minLength2, maxLength30], FormElementInput,*/}
            {/*    {type: 'password'})}*/}
            {/*{createField(null, "rememberMe", [], FormElementInput, {type: 'checkbox'}, 'remember me')}*/}
            <div>
                <Field placeholder="Login"
                       name="login"
                       component={FormElementInput}
                       validate={[required, minLength2, maxLength30]}
                />
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       type={"password"}
                       component={FormElementInput}
                       validate={[required, minLength2, maxLength30]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name="rememberMe"
                       component={FormElementInput}
                /> remember me
            </div>
            {error && <div className={styles.formErrorLogin}>
                {error}
            </div>}
            <div>
                <button type={"submit"}>log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
    logout: () => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);