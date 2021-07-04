import React, {InputHTMLAttributes} from 'react';
import styles from './FormsControls.module.css';
import {Field, WrappedFieldProps} from "redux-form";

export const FormElementCreator = (Element: string) =>
    ({input, meta: {touched, error}, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
        const hasError = touched && error
        return (
            <div>
                <Element className={hasError ? styles.error : ""} {...input} {...props} />
                {hasError && <span className={styles.spanError}>{error}</span>}
            </div>
        )
    }

export const FormElementInput = FormElementCreator('input')
export const FormElementTextarea = FormElementCreator('textarea')

type CreateFieldType = {
    placeholder: string
    name: string
    component: any
    validate: any
    props?: {}
    text?: string
}

export const createField = (props: CreateFieldType) => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validate}
               component={component}
               {...props}
        /> {text}
    </div>
}
