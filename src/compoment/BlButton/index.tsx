import React from 'react'

export type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  onclick: () => void
}
const BlButton = ({ type = 'primary', onclick, text }: ButtonProps) => (
  <div className={`bl-button ${type}`} onClick={onclick}>
    {text}
  </div>
)

export default BlButton
