import React from 'react'
import AuthContainer from './components/AuthContainer'
import { Link } from 'react-router-dom'
import FormInput from './components/FormInput'
import FormButton from './components/FormButton'



const Login = () => {
  return (
    <AuthContainer>
        <div className='w-full flex flex-col items-center justify-start xl:gap-[61px] xl:px-[153px] lg:gap-[46px] gap-8 lg:px-[115px] xl:pt-48 lg:pb-[50px] lg:pt-28'>
          <h1 className="font-semibold xl:text-[32px] xl:leading-[70px] lg:text-2xl text-xl text-blackish">Sign in to your <span className='text-primary'>Account</span></h1>
          <form data-aos="fade-up" data-aos-once="true" data-aos-delay="500" className='w-full lg:max-w-none md:max-w-[500px] max-w-full flex justify-center flex-col xl:gap-9 lg:gap-8 gap-6'>
            <FormInput 
              type="email"
              placeholder='Enter Email' 
            />
            <FormInput 
               type="password"
               placeholder='Enter Password'  
            />
            <div className='flex flex-col justify-center xl:gap-4 lg:gap-3 w-full'>
                <Link 
                  to="/user/verify"
                  className="self-end font-normal lg:font-medium xl:text-lg text-sm text-end text-[#f3723f]"> Forgot Password
                </Link>
                <FormButton
                  text='Sign in'
                />
                  <Link 
                    to="/user/register"
                    className='xl:font-normal font-medium xl:text-lg text-sm text-center text-[#999]'>Don't Have an account? <span className='text-primary'>Register</span>
                  </Link>
                </div>
          </form>
        </div>
    </AuthContainer>
  )
}

export default Login