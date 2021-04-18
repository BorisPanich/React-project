import React, {InputHTMLAttributes} from 'react';
import styles from './FormsControls.module.css';
import {WrappedFieldProps} from "redux-form";

// type FormControlType = {
//     input: any
//     meta: any
//     children: any
// }

export const FormElementCreator = (Element: string) =>
    ({input, meta, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <Element className={hasError ? styles.error : ""} {...input} {...props} />
            {hasError && <span className={styles.spanError}>{meta.error}</span>}
        </div>
    )
}

export const FormElementInput = FormElementCreator('input')
export const FormElementTextarea = FormElementCreator('textarea')
