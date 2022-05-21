import React from 'react'
import { ThemeContext } from './ThemeChanger'

function Navbar() {
  return (
    <>
      <div className='text-xl font-medium'>Navbar</div>
      <Options></Options>
    </>
  )
}

function Options() {
  let cTheme = React.useContext(ThemeContext);
  const style = (cTheme === "light" ? 'bg-gray-800 text-gray-300' : 'bg-white text-black')
  return(
    <div className={style}>
    <div>Option 1</div>
    <div>Option 2</div>
    <div>Option 3</div>
    </div>
  )
}

export default Navbar;