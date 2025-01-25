import React, { useState } from 'react'
import AuthContainer from './components/AuthContainer'
import { Link, useNavigate } from 'react-router-dom'
import FormButton from './components/FormButton'
import OtpInput from 'react-otp-input';


const Verify = () => {
  const [otp, setOtp] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(otp)
    setOtp('');
  }
  
  return (
        <AuthContainer>
          <div className='w-full flex flex-col items-center justify-start xl:gap-28 lg:gap-20 xl:px-[153px] gap-16 lg:px-[115px] xl:pt-48 lg:pb-[50px] lg:pt-28'>
          <h1 className="font-semibold xl:text-[32px] xl:leading-[70px] lg:text-2xl text-xl text-blackish">Please Enter <span className='text-primary'>OTP</span> Sent to Your Email</h1>
          <form data-aos="fade-up" data-aos-once="true" data-aos-delay="500" className='w-full lg:max-w-none md:max-w-[500px] max-w-full flex justify-center flex-col xl:gap-28 lg:gap-20 gap-14' onSubmit={handleSubmit}>
             <div className="flex flex-row items-center justify-center xl:gap-12 lg:gap-9 md:gap-6 gap-4 mx-auto w-full font-mulish">   
             <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputType="tel"
              shouldAutoFocus
              renderSeparator={<span className='text-transparent xl:px-5 lg:px-[15px] px-1'>-</span>}
              inputStyle={{ 
                width: '100%', 
                height: '100%',
              }}
              renderInput={(inputProps, index) => (
                <div className="lg:w-20 md:h-20 h-16">
                  <input 
                    {...inputProps} 
                    placeholder={`${index+1}`} 
                    className="w-full h-full flex flex-col items-center justify-center outline-none focus:outline-none lg:font-normal font-medium xl:text-3xl lg:text-lg text-base text-center px-5 rounded-sm border border-none bg-[#d9d9d9] focus:bg-[#ddd] transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary"
          />
        </div>
      )}
    />
            </div>
          
              <div className='w-full flex flex-col items-center justify-center xl:gap-4 lg:gap-3'>
                <FormButton
                  text='Verify Email'
                  onClick={() => navigate('/')}
                />
                  <Link 
                    to="/"
                    className='xl:font-normal font-medium xl:text-lg text-sm text-center text-[#999]'>Didn't receive OTP? <span className='text-primary'>Send it again.</span>
                  </Link>
              </div>
          </form>
        </div>
        </AuthContainer>
  )
}

export default Verify