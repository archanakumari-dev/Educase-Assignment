import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import './Common.css'

const Home = () => {
  return (
    <Container className='flex flex-col justify-end px-4 py-8'>
       <div className='m-5'>
          <div className='text-[28px] font-[500] text-[var(--main-heading-color)]'>Welcome to PopX</div>
          <div className='w-[232px] text-[var(--para-color)] mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className='flex flex-col gap-4'>
          <Link to={'/signup'} className=' bg-[var(--btn-primary-color)] rounded-md text-[var(--white-color)] text-[16px] py-4 px-2 text-center transition-all duration-200 ease-in'>Create Account</Link>
          <Link to={'/login'} className=' bg-[var(--btn-secondary-color)] rounded-md text-black text-[16px] py-4 px-2 text-center '>Already Registered? Login</Link>
          </div>
       </div>
    </Container>
  )
}

export default Home