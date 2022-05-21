import React from 'react'

function Navbar() {
  return (
    <>
      <div className='text-xl font-medium'>Navbar</div>
      <Options></Options>
    </>
  )
}

function Options() {
  return(
    <div className='bg-gray-800 text-gray-300'>
    <div>Option 1</div>
    <div>Option 2</div>
    <div>Option 3</div>
    </div>
  )
}

export default Navbar;