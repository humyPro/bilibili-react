import React from 'react'

export type ButtonProps = {
  text: string
  backgroundColor?: string
  textColor?: string
  onclick: () => void
}
const BlButton = ({ backgroundColor, onclick, text, textColor }: ButtonProps) => (
  <div className="bl-button" style={{ color: textColor, backgroundColor }} onClick={onclick}>
    {text}
  </div>
)

export default BlButton
