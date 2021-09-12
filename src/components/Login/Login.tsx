import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input} from '../common/FormControls/FormControls';
import {requiredField} from '../../utils/validators/validators';
import { useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from './../common/FormControls/FormControls.module.css';
import loginStyle from './Login.module.css'

// email: "mariya.syrokvash@yandex.ru"
// password: "1234567890-="

// type LoginType = {
// 	email: string
// 	password: string
// 	rememberMe: boolean
// 	login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
// 	isAuth: boolean
// }

export const Login = () => {
	const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
	const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
	const dispatch = useDispatch()

	console.log(captchaUrl)

	const onSubmit = (formData: LoginFormValuesType) => {
		dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
	}

	if (isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div className={loginStyle.box}>
			<h2 className={loginStyle.title}>Sing In</h2>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
		</div>
	)
}

type LoginFormOwnProps = {
	captchaUrl: string | null
}

export type LoginFormValuesType = {
	captcha: string
	rememberMe: boolean
	password: string
	email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType,
	LoginFormOwnProps> & LoginFormOwnProps> = ({
																							 handleSubmit,
																							 error, captchaUrl
																						 }) => {
	console.log(captchaUrl)
	return (
		<form onSubmit={handleSubmit} className={loginStyle.form}>
			{createField<LoginFormValuesTypeKeys>('Email', 'email', [requiredField], Input)}
			{createField<LoginFormValuesTypeKeys>('Password', 'password', [requiredField], Input, {type: 'password'})}
			{createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}


			{error && <div className={style.formErrorSummary}>{error}</div>}
			{captchaUrl && <img className={loginStyle.captchaImg} src={captchaUrl}/>}

			{captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [requiredField], Input, {})}
			<button type={'submit'} className={loginStyle.loginBtn}>Get Started</button>
		</form>
	)
}

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)



