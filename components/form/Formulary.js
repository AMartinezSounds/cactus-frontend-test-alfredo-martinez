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
        <div className='h-[700px] mx-auto flex flex-col justify-between ls:flex-row items-end h-[640px] w-[89%] mb-[150px] mt-[75px]'>
          <h2 className='w-[70%] h-[20%] ml-0 mr-auto text-sectionTitle pr-8 leading-10 sm:w-[90%] text-left md:w-full text-center ls:w-[25%] text-left h-full desktop:w-[20%] self-start'>Connect with me</h2>
          <Form className='w-full flex flex-col justify-between h-[80%] md:max-w-[550px] mx-auto ls:w-[75%] h-[600px]'>
            <TextField label='Name' name='name' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextField label='Phone (optional)' name='phone' type='text' />
            <TextArea label='Message' name='message' />
            <div className='flex items-center'>
              <Field type='checkbox' name='terms' value='terms' className='w-[5%]' />
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
