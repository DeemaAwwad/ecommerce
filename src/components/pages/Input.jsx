import React from 'react'

export default function Input({type, id , name , title,value,onChange,errors,onBlur,touched}) {
  return (
    <>
      <div className='input-group mb-3'>
        <label htmlFor={id}>{title}</label>
        <input type={type} name={name} onBlur={onBlur} className='form-control' value={value} id={id} onChange={onChange} />
        {touched[name] && errors[name]&& <p className='text text-danger'> {errors[name]} </p>}
      </div>
    </>
  )
}
