import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import TextField from './TextField'
import TextArea from './TextArea'

function Formulary () {
  const validate = Yup.object({
    name: Yup.string()
      .min(2, 'Enter a valid name')
      .max(15, 'Must be 15 characters or less')
      .required("Can't be empty"),
    email: Yup.string().email('Enter a valid email').required("Can't be empty"),
    message: Yup.string()
      .max(500, 'Must be 500 characters or less')
      .required("Can't be empty")
  })
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
      }}
    >
      {(formik) => (
        <div className='h-[680px] mx-auto flex flex-col justify-between ls:flex-row items-end h-[540px] w-[89%] mb-[150px]'>
          <h2 className='text-sectionTitle pr-8 leading-10 md:text-center ls:text-left w-[20%] h-full'>Connect with me</h2>
          <Form className='flex flex-col justify-between h-[550px] ls:w-[75%] h-[500px]'>
            <TextField label='Name' name='name' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextField label='Phone (optional)' name='phone' type='text' />
            <TextArea label='Message' name='message' />
            <div className='flex items-center'>
              <Field type='checkbox' name='terms' value='terms' className='w-[5%] -ml-4' />
              <label htmlFor='terms' className='w-[95%]'>Accept terms and conditions</label>
            </div>
            <div className='flex items-center'>
              <button type='submit' className='btn mx-auto'>Send message</button>
            </div> 
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Formulary
