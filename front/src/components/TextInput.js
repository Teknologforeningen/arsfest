import React from "react"

const TextInput = ({ id, text, onChange, value }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className='block mb-2 text-sm font-medium hover:text-[#ceb886]'>
        {text}
      </label>
      <input className='bg-inherit border border-[#ddcdaa] focus:ring-[#ddcdaa] text-sm rounded-lg block w-full p-2.5 hover:text-[#ceb886] hover:border-[#ceb886] focus:border-[#ceb886] focus:outline-none'
        type="text" id={id} name={id} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextInput