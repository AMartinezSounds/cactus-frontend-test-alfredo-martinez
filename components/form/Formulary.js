import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

import TextField from './TextField'
import TextArea from './TextArea'

function Formulary () {
  const validate = yup.object().shape({
    name: yup.string()
      .min(2, 'Enter a valid name')
      .max(15, 'Must be 15 characters or less')
      .required("Can't be empty"),
    email: yup.string().email('Enter a valid email').required("Can't be empty"),
    message: yup.string()
      .max(500, 'Must be 500 characters or less')
      .required("Can't be empty"),
    terms: yup.bool().required('**')
  })
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
        terms: false
      }}
      validationSchema={validate}
      onSubmit={(values) => {
      }}
    >
      {({ formik }) => (
        <div className='h-[700px] mx-auto flex flex-col justify-between ls:flex-row items-end h-[640px] w-[89%] mb-[150px] mt-[75px]'>
          <h2 className='w-[70%] h-[20%] text-sectionTitle pr-8 leading-10 sm:w-[90%] md:w-full text-center ls:w-[25%] text-left h-full desktop:w-[20%] self-start'>Connect with me</h2>
          <Form className='w-full flex flex-col justify-between h-[80%] md:max-w-[550px] mx-auto ls:w-[75%] h-[600px]'>
            <TextField className='focus:outline-none' label='Name' name='name' type='text' />
            <TextField className='focus:outline-none' label='Email' name='email' type='email' />
            <TextField className='focus:outline-none' label='Phone (optional)' name='phone' type='text' />
            <TextArea className='focus:outline-none' label='Message' name='message' />
            <div className='flex items-center'>
              <Field type='checkbox' name='terms' value='acceptedTerms' className='w-[5%]' checked />
              <label htmlFor='terms' className='w-[58%]'>Accept terms and conditions</label>
              <ErrorMessage name='terms' component='div' className='errorMessage' />
            </div>
            <div className='flex items-center'>
              <button type='submit' className='btn btnAnimation mx-auto'>Send message</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Formulary
