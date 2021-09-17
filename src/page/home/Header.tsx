import React from 'react'

type HeaderProps = {
  headPortraitUrl?: string
  msgCount?: number
}
const Header = ({ headPortraitUrl, msgCount }: HeaderProps) => (
  <div className="header">
    <div className="head-img">
      {headPortraitUrl ? <img src="" alt="" /> : <div className="un-login-avatar">登录</div>}
    </div>
    <div className="search-container">
      <input className="search-box" />
    </div>
    <div className="message">
      <div className="message-icon" />
    </div>
  </div>
)

export default Header
