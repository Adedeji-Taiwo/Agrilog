import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContainer from './components/AuthContainer'
import FormInput from './components/FormInput'
import FormButton from './components/FormButton'




const Register = () => {



  return (
   <>
    <AuthContainer>
    <div className='w-full flex flex-col items-center justify-start xl:gap-[61px] xl:px-[153px] lg:gap-[46px] gap-8 lg:px-[115px] xl:py-[126px] lg:py-[50px]'>
          <h1 className="font-semibold xl:text-[32px] xl:leading-[70px] lg:text-2xl text-xl text-blackish">Create Your <span className='text-primary'>RendaHr</span> Account</h1>
          <form data-aos="fade-up" data-aos-once="true" data-aos-delay="500" className='w-full flex justify-center flex-col xl:gap-9 lg:gap-8 gap-6'>
              <div className='grid place-items-start md:grid-cols-2 xl:gap-y-9 xl:gap-x-[45px] lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6'>
                <FormInput 
                  type="text" 
                  placeholder='First Name' 
                />
                <FormInput 
                   type="text"  
                   placeholder='Last Name'
                />
                 <FormInput 
                   type="text"
                   inputMode='numeric'
                   placeholder='Mobile Number'  
                />
                 <FormInput 
                type="email"
                placeholder='Email Address' 
              />
            </div>
              <FormInput 
                type="email"
                placeholder='Company Email Address' 
              />
              <FormInput 
                 type="password"
                 placeholder='Password' 
              />
              <FormInput 
                 type="password"
                 placeholder='Confirm Password' 
              />
                <div className='flex flex-col justify-center xl:gap-4 lg:gap-3 w-full xl:mt-6 lg:mt-4 mt-3'>
                <p className="flex items-center justify-start xl:gap-[14px] lg:gap-3 gap-2">
                    <input id="accept" type="checkbox" value="" className="accent-primary xl:w-[23px] xl:h-[23px] lg:w-[18px] lg:h-[18px] w-3 h-3 border border-black rounded bg-white focus:ring-3 focus:ring-primary focus:ring-offset-primary" />
                    <label htmlFor="accept" className="font-normal lg:font-medium xl:text-lg text-sm text-center">I accept the <span className='text-[#E98862]'>Terms of Use</span> and I agree to the terms of <span className='text-[#E98862]'>Privacy Policy</span>.</label>
                </p>
                <p className="font-normal xl:text-base text-xs text-left text-[#ff0000] xl:ml-9 lg:ml-7 hidden">Please accept the terms and conditions</p>
                  <FormButton
                  text='Get Started'
                />
                  <Link 
                    to="/user/login"
                    className='xl:font-normal font-medium xl:text-lg text-sm text-center text-[#999]'>Already Have an account? <span className='text-primary'>Sign in</span></Link>
                </div>
          </form>
      </div>
    </AuthContainer>
  </>
  )
}

export default Register