import React, { useState } from 'react'
import Base from './Base'
import '../style/App.css'


export default function Header() {

  const [isDropdownVisible, setIsDropDownVisible] = useState(false);

  const dropdownToggle = () => {
    setIsDropDownVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className='header'>
        <div className='logo'><a href="/"><img src={Base.logo} alt="" />GreenHaven</a></div>
        <div className='menu' onClick={dropdownToggle}><div className='dropicon'></div>Menu</div>
        <div className={`dropdown ${isDropdownVisible ? 'visible' : 'hidden'}`}><a href='/plantcareguide'>Plant care guides</a><a href='/diy'>DIY's</a><a href='/gardendesignidea'>Garden design ideas</a><a href='/showcase'>Showcase</a></div>
        {/* <div className='login'><button>Login</button></div> */}
      </div>
      <hr className='horizontal' />

    </>
  )
}
