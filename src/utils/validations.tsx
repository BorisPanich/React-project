export const required = (value: string) => {
    return value.length ? undefined : 'This field is required'
}

export const maxLength = (max: number) => (value: string) => {
    return value.length > max ? `Error, maximum characters ${max}` : undefined
}

export const minLength = (min: number, max: number) => (value: string) => {
    return (value.length > min && value.length < max)  ? undefined : `Required min - ${min}, max - ${max} symbols`
}