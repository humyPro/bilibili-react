import React from 'react'

export type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  disable?: boolean
  onclick: () => void
}
const BlButton = ({ type = 'primary', onclick, text, disable = false }: ButtonProps) => (
  <div
    className={`bl-button ${type} ${disable ? 'disabled' : ''}`}
    onClick={() => {
      if (disable) {
        return
      }
      onclick()
    }}
  >
    {text}
  </div>
)

export default BlButton
