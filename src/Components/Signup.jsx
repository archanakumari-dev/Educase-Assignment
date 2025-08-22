import Input from './Input'
import Container from '../Container'
import { Link } from 'react-router-dom'

const Signup = () => {
    const handleChange=()=>{
        
    }
  return (
    <Container className='px-4 py-8 '>
       <div className='text-[28px] w-[188px] mb-5'>Create your PopX account</div>
       <div className='flex flex-col mb-3 '>
       <Input label="Full Name" type="text" required={true} handlechange={handleChange} name='name' value='Marry Doe' placeholder="Enter name" />
       <Input label="Phone Number" type="text" required={true} handlechange={handleChange} name='name' value='Marry Doe' placeholder="Enter number" />
       <Input label="Email Address" type="email" required={true} handlechange={handleChange} name='email' value='Marry Doe' placeholder="Enter email address" />
       <Input label="Password" type="text" required={true} handlechange={handleChange} name='password' value='Marry Doe' placeholder="Enter password" />
       <Input label="Company Name" type="text" required={false} handlechange={handleChange} name='name' value='Marry Doe' placeholder="Enter company" />

       <label >Are you agency?<span className="text-[red]">*</span></label>
       <div className='flex ml-3 gap-10'>
       <label htmlFor="">
       <input type="radio" name='button' value="Yes" />
       <span>Yes</span>
       </label>
       <label htmlFor="">
       <input type="radio" name="button" value="No" />
       <span>No</span>
       </label>
       </div>
       </div>
        <Link to='/profile' className=' bg-[var(--btn-primary-color)] rounded-md text-white text-[22px] py-4 px-2 text-center w-full mt-3'>Create Account</Link>
       
    </Container>
    
  )
}

export default Signup