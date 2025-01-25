import React, {FC  } from 'react';
import goods from '../../../../assets/auth/GeoSmart.png'
import Logo from '../../../../assets/dashboard/header/ReactHqlogo.png'


type ContainerPropType = {
    children: React.ReactNode,
}


const AuthContainer:FC<ContainerPropType> = ({children}) => {
  return (
    <div className="flex lg:items-stretch flex-col items-start lg:flex-row lg:justify-center justify-start lg:gap-0 gap-8 lg:p-0 p-6 min-h-screen w-full lg:bg-none auth-bg">
        <div className='xl:w-4/6 lg:w-[70%] w-full flex flex-col items-center justify-start xl:gap-[90px] xl:px-[50px] lg:gap-[50px] lg:px-[38px] xl:py-[126px] lg:py-[50px] auth-bg'>
            <img src={Logo} alt="reactHq" className='w-full h-auto xl:max-w-[180px] xl:-mt-3 max-w-[110px] lg:-mt-5' />
            <div className='w-full lg:flex flex-col items-center justify-start hidden xl:gap-10 lg:gap-5 relative h-auto'>
              <img src={goods} alt="products" className='w-full h-auto xl:max-w-[400px] max-w-[350px]' />
              <p className='lg:block hidden xl:font-normal font-medium xl:text-base text-sm text-center text-blackish'>We have kept a sit for you. <br /> Hop in now and get productive!</p>
            </div>
        </div>
        {children}
    </div>
  )
}

export default AuthContainer