import React from 'react'

export default function Header() {
  return (
    <div>
    <Header className='flex justify-between items-center px-3 max-w-6xl'>
     <div>
        <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer'/>
     </div>
     <div>
      <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Sign-In</li>
        <li>Sign-up</li>
      </ul>
     </div>
    </Header>
    </div>
  )
}
