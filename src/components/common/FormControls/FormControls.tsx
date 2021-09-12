import React from 'react';
import style from './FormControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from '../../../utils/validators/validators';

type FormControlPropsType = {
	meta: WrappedFieldMetaProps
}

export const Textarea: React.FC<WrappedFieldProps>  = (props) => {
	// const {input, meta, child, ...restProps} = props
	const {input, meta, ...restProps} = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} className={style.textarea}/>
		</FormControl>
	)
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
	// const {input, meta, child, ...restProps} = props
	const {input, meta, ...restProps} = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} className={style.input}/>
		</FormControl>
	)
}

// @ts-ignore
const FormControl: React.FC<FormControlPropsType> = ({input, meta: {touched, error}, children, ...props}) => {
	const hasError = touched && error
	return (
		<div className={`${style.boxTextarea} ${style.formControl} ${hasError ? style.error : ''}`}>
			<div>
				{children}
			</div>
			{hasError && <p className={style.errorMessage}>{error}</p>}
		</div>
	)
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
																												 name: FormKeysType,
																												 validators: Array<FieldValidatorType>,
																												 component: React.FC<WrappedFieldProps>,
																												 props = {}, text = "") {
	return <div>
		<Field placeholder={placeholder} name={name}
					 validate={validators}
					 component={component}
					 {...props}
		/> {text}
	</div>
}

export type GetStringKeys<T> = Extract<keyof T, string>