import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px]
     text-primary outline-none ${styles} hover:scale-110 focus:outline-none active:ring active:ring-sky-400
     rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button