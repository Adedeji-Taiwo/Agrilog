import React from 'react'
import { Contracts, PersonalDocument, RefereeDocument } from './components'


//download format
// <a href={CV} download className='btn'>Download CV</a>


const Documents = () => {
  return (
    <div className='order-3 lg:col-start-2 lg:col-end-5 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3'>
      <Contracts />
      <PersonalDocument />
      <RefereeDocument />
    </div>
  )
}

export default Documents

