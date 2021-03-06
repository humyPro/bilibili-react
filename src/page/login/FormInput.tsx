import React, { useState } from 'react'

export type FromInputProps = {
  initValue?: string
  fieldName: string
  maxlength?: number
  placeholder?: string
  onchange: (value: string) => void
  type?: 'text' | 'password' | 'number'
}

const FromInput = (props: FromInputProps) => {
  const { fieldName, onchange, maxlength, placeholder, initValue, type } = props

  const [value, setValue] = useState(initValue ?? '')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value ?? ''
    setValue(inputValue)
    onchange(inputValue)
  }
  return (
    <div className="login-from-input">
      <div className="field text">{fieldName}</div>
      <div className="input">
        <input
          value={value}
          onChange={handleChange}
          maxLength={maxlength}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}

export default FromInput
