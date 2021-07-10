import React from 'react'
import { ErrorMessage, useField } from 'formik'

function TextField ({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <input
        className={`${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete='off'
        placeholder={field.name.replace(
          field.name[0],
          field.name[0].toLocaleUpperCase()
        )}
      />
      <ErrorMessage component='div' name={field.name} className='errorMessage' />
    </div>
  )
}

export default TextField
