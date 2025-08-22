import React from 'react'
import Container from '../Container'


const Profile = () => {
  return (
    <Container>
        <div className='bg-white p-3.5 text-[18px] '>Account Settings</div>
        <div className='flex gap-4 mt-6' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57RoancDFAcjSoULb4VaCHqcp4St7r5P0fQ&s" alt="" className='w-[76px] h-[76px] rounded-full' />
        <div className='flex flex-col gap-1.5 items-start '>
            <div className='text-[15px] font-bold'>Marry Doe</div>
            <div className='text-[14px] font-medium'>marry@gmail.com</div>
        </div>
        </div>

        <div className='mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, accusamus facere. Aliquam, quisquam error culpa, fugit assumenda ab ipsam aspernatur quas beatae ex at eligendi?</div>
    </Container>
  )
}

export default Profile