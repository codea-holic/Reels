import React from 'react'

function Footer() {
  return (
    <>
      <div className='text-xl font-medium'>Footer</div>
      <FooterText></FooterText>
    </>
  )
}

function FooterText() {
  return (
    <div className='bg-gray-800 text-gray-300'>
      <div>Option 1</div>
      <div>Option 2</div>
    </div>
  )
}

export default Footer;