import React from 'react';
import styles from './FormsControls.module.css';

type FormControlType = {
    input: any
    meta: any
    children: any
}

export const FormElementCreator = (Element: string) => ({input, meta, children, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <Element className={styles.formControl + " " + (hasError ? styles.error : "")} {...input} {...props} />
            (hasError && <span className={styles.spanError}>{meta.error}</span>
        </div>
    )
}

export const FormElementInput = FormElementCreator('input')
export const FormElementTextarea = FormElementCreator('textarea')

// export const Textarea = (props: any) => {
//     const {input, meta, ...restProps} = props;
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }
//
// export const Input = (props: any) => {
//     const {input, meta, ...restProps} = props;
//     return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }
