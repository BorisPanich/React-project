export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    return value ? undefined : 'This field is required'
}

export const maxLength = (max: number): FieldValidatorType => (value) => {
    return value.length > max ? `Error, maximum characters ${max}` : undefined
}

export const minLength = (min: number, max: number): FieldValidatorType => (value) => {
    return (value.length > min && value.length < max)  ? undefined : `Required min - ${min}, max - ${max} symbols`
}