import React from "react"

const Checkbox = ({ id, text, onChange, value }) => {
  return (
    <div className="form-check mb-3">
      <input className='w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-[#C0C0C0]'
        type="checkbox" id={id} name={id} value={value} onChange={onChange} />
      <label htmlFor={id} className='ml-2 text-sm font-medium hover:text-[#ceb886]' >
        {text}
      </label>
    </div>
  )
}

export default Checkbox