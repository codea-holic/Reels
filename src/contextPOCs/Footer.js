import React from 'react'
import { ThemeContext } from './ThemeChanger'

function Footer() {
  return (
    <>
      <div className='text-xl font-medium'>Footer</div>
      <FooterText></FooterText>
    </>
  )
}

function FooterText() {
  let cTheme = React.useContext(ThemeContext);
  const style = (cTheme === "light" ? 'bg-gray-800 text-gray-300' : 'bg-white text-black')
  return (
    <div className={style}>
      <div>Option 1</div>
      <div>Option 2</div>
    </div>
  )
}

export default Footer;