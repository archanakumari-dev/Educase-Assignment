import Container from '../Container'
import Input from './Input'
import { Link } from 'react-router-dom'
const Login = () => {
   const handleChange=()=>{

   }
  return (
    <Container className='flex flex-col py-8 px-4' >
       <div className='text-[28px] w-47'>Sign in to your PopX account</div>
       <div className='text-[var(--para-color)] w-[232px] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
       <Input label="Email Address" type="email" required={true} handlechange={handleChange} name='email' value='Enter email address' placeholder="Enter email address" />
       <Input label="Password" type="password" required={true} handlechange={handleChange} name='password' value='Enter password' placeholder="Enter password" />
        <Link to={'/profile'} className=' bg-[var(--btn-secondary-color)] rounded-md text-black text-[16px] py-4 px-2 text-center '>Login</Link>

    </Container>
  )
}

export default Login