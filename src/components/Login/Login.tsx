import React from 'react';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validations";
import {FormElementInput} from "../common/FormControls/FormControls";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength15 = maxLength(15);
const minLength2 = minLength(2, 15);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       name="login"
                       component={FormElementInput}
                       validate={[required, minLength2, maxLength15]}
                />
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={FormElementInput}
                       validate={[required, minLength2, maxLength15]}
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

const Login = () => {
    const onSubmit = (formData: FormDataType) => {}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;