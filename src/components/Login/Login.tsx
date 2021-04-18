import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validations";
import {FormElementInput} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLength(30);
const minLength2 = minLength(2, 30);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default connect(null, {login})(Login);