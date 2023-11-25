import React from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik'
import { registerSchema } from '../validation/Validate.js'
import {toast} from 'react-toastify'
import axios from 'axios'

export default function Register() {

    const handleFieldChange = (event)=>{
        formik.setFieldValue('image',event.target.files[0])
    }

   const initialValues = {
        userName:'',
        email:'',
        password:'',
        image:'',

    }
    const  onSubmit = async users =>{
        const formData = new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
        console.log(data)
        if(data.message == 'success'){
           formik.resetForm();
           toast.success('plz verify your email to login', {
               position: "bottom-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               });
        }
  }

    const formik = useFormik({
        initialValues ,
        onSubmit,
        validationSchema:registerSchema
    })


    const inputs = [
        {
            id:'user name',
            type: 'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,

        },
        {
            id:' email',
            type: 'email',
            name:'email',
            title:'user name',
            value:formik.values.email,

        },
        {
            id:' password',
            type: 'password',
            name:'password',
            title:'user password',
            value:formik.values.password,

        },
        {
            id:' image',
            type: 'file',
            name:'image',
            title:'user image',
            onChange:handleFieldChange

        }
    ]

    const renderInputs = inputs.map( (input,index)=>
        <Input type={input.type}
         id={input.id} 
         name={input.name}
          title={input.title}
          value={input.value}
           key={index}
           errors={formik.errors}
           onChange={input.onChange || formik.handleChange}
           onBlur={formik.handleBlur}
           touched={formik.touched}
            />
    )
  return (
   <>
    <div className='container'>
        <h2>Create Account</h2>
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
             {renderInputs}
            <button type='submit' disabled={!formik.isValid}>Register</button>

        </form>
      
    </div>
   </>
  )
}
