import React from 'react'

const Input = ({handleChange,value,name,label,required,type,placeholder}) => {
  return (
     <div className="relative mb-12">
            <label className="absolute -top-4 left-1.5 text-[1.3rem] text-[var(--btn-primary-color)] bg-[var(--bg-color)] z-[2] px-[3px]  " htmlFor={name}>{label}{required ? <span className="text-[red]">*</span>:""}</label>
            <input onChange={handleChange} value={value} name={name} placeholder={placeholder} className="border-2 border-[#CBCBCB] rounded-md w-full py-4 px-4 bg-transparent focus:outline-none text-[1.6rem] focus:border-[var(--btn-primary-color)] text-[var(--para-color)]" type={type} required={required}/>
        </div>
  )
}

export default Input