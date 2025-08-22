
import React from 'react'

const Container = ({children,className=''}) => {
  return (
    <div className={`max-w-[375px] w-full min-h-screen mx-auto bg-[#F7F8F9] shadow-xl ${className}`}>
      {children}
     </div>
  )
}

export default Container