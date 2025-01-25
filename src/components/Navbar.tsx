import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { Logo, PartyBlower, LogoSmall } from '../assets/Navbar'
import {Button} from './../components/index';
import { menuData } from '../constants/homepage';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

  return (
    <nav  className={`${styles.paddingX} w-full flex items-center font-poppins md:py-7 py-0`}>
    <div className="flex lg:flex-nowrap flex-wrap items-center justify-between mx-auto w-full md:-mt-24 md:-ml-16 mt-4">
    <Link 
        to="/"
        className='flex items-center'
        >
          <img src={window.innerWidth > 767 ? Logo : LogoSmall} alt="logo"  className='w-full h-auto md:max-w-[300px] max-w-[92px] object-contain'/>
      </Link>
        <div className="started flex items-center gap-6 lg:order-2">
        <Button 
            className='group bg-primary hover:bg-white hover:border hover:border-y-primary lg:px-[30px] lg:py-4 px-4 py-2 md:flex hidden'
            type='button'
            onMouseEnter={() => {setHover(true); setTimeout(() => {setHover(false)}, 1000)}}
            onMouseLeave={() => setHover(false)}
            children={
                <>
                    <span className="lg:text-xl text-sm text-white group-hover:text-black font-medium">Get Started</span>
                    <img src={PartyBlower} alt="get started" className={`${hover ? "scale-0 invisible " : "visible scale-100"} transition-all duration-1000 ease-in-out  w-full h-auto max-w-[25px]`}  />
                </>
            }
        />
        {menuOpen ? (
            <Button 
            type="button" 
            className="inline-flex items-center py-[9px] px-[18px] font-rubik text-sm text-white bg-[#257BB6] rounded-lg lg:hidden" 
            children={
               <>
                <span className="lg:text-base text-sm text-white group-hover:text-black font-medium">Close</span>
               </>
            }
           onClick={() => setMenuOpen(!menuOpen)}
       />
        ):(
            <Button 
            type="button" 
            className="inline-flex items-center py-[9px] px-[18px] sm:-mr-[18px] ml-1 text-sm text-secondary-dark rounded-lg lg:hidden  focus:outline-none" 
            children={
               <>
                   <svg className='w-6 h-4 md:w-8 md:h-6' viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M24 1.5H0V0H24V1.5ZM24 13.5H0V12H24V13.5ZM24 7.488H0V6H24V7.488Z" fill="#333333"/>
                   </svg>

               </>
            }
           onClick={() => setMenuOpen(!menuOpen)}
       />
        )}

            
        </div>
        <div className={`items-center justify-between w-full lg:mr-auto lg:flex lg:w-auto lg:order-1 duration-700 transition-all ease-in-out cursor-pointer relative`}>
            <ul className={`flex flex-col mt-4 md:pt-0 pt-12 text-sm font-medium lg:px-0 sm:px-16 px-6 lg:flex-row lg:gap-0 gap-10 lg:space-x-9 lg:mt-0 ${menuOpen ? 'inset-0 md:h-full h-screen md:relative fixed md:-top-24 top-36 bg-white z-10' : 'lg:flex hidden'}`}>
           <li>
                    <Link to='/'   onClick={() => setMenuOpen(false)} className="block lg:hidden py-2 lg:pl-3 pr-4 lg:text-primary lg:hover:text-secondary-dark hover:text-primary text-blackish lg:font-medium font-normal lg:text-lg text:base lg:p-0 hover:bg-white lg:hover:bg-transparent">Home</Link>
                </li>
                <li className='group'>
                    <button  className="flex items-center w-full py-2 lg:pl-3 pr-4 lg:text-primary lg:hover:text-secondary-dark hover:text-primary text-blackish lg:font-medium font-normal lg:text-lg text-base lg:w-auto lg:hover:text-opacity-80 lg:p-0 hover:bg-white lg:hover:bg-transparent">
                    Products <svg aria-hidden="true" className="w-5 h-5 ml-1 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div data-aos="fade-up" data-aos-delay="100" className="absolute z-10 grid invisible opacity-0 group-hover:visible  group-hover:opacity-100 md:w-full w-fit grid-cols-2 xs:grid-cols-3 text-sm border rounded-[10px] shadow-md border-primary bg-secondary-dark">
                        <div className="p-4 pb-0  md:pb-4">
                            <ul className="space-y-4">
                                {menuData.productsOne.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 pb-0  md:pb-4">
                            <ul className="space-y-4">
                            {menuData.productsTwo.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 ">
                            <ul className="space-y-4">
                            {menuData.productsThree.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
                
                <li className='group'>
                    <button  className="flex items-center w-full py-2 lg:pl-3 pr-4 lg:text-primary lg:hover:text-secondary-dark hover:text-primary text-blackish lg:font-medium font-normal lg:text-lg text-base lg:w-auto lg:hover:text-opacity-80 lg:p-0 hover:bg-white lg:hover:bg-transparent">
                        Company <svg aria-hidden="true" className="w-5 h-5 ml-1 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div data-aos="fade-up" data-aos-delay="100" className="absolute z-10 grid invisible opacity-0 group-hover:visible  group-hover:opacity-100 md:w-full w-fit grid-cols-2 xs:grid-cols-3 text-sm border rounded-[10px] shadow-md border-primary bg-secondary-dark">
                        <div className="p-4 pb-0  md:pb-4">
                            <ul className="space-y-4">
                                {menuData.companyOne.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 pb-0  md:pb-4">
                            <ul className="space-y-4">
                            {menuData.companyTwo.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 ">
                            <ul className="space-y-4">
                            {menuData.companyThree.map((item) => (
                                    <li key={item}>
                                    <a href="#" className="text-white hover:text-opacity-80 md:text-sm text-xs font-normal">
                                        {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/pricing"   onClick={() => setMenuOpen(false)} className="block py-2 lg:pl-3 pr-4 lg:text-primary lg:hover:text-secondary-dark hover:text-primary text-blackish lg:font-medium font-normal lg:text-lg text-base lg:p-0 hover:bg-white lg:hover:bg-transparent">Pricing</Link>
                </li>
                <li className='md:hidden block'>
                <Button 
                    className='group bg-primary hover:bg-white hover:border hover:border-y-primary lg:px-[30px] lg:py-4 flex md:hidden md:py-4 md:px-4 p-3 gap-2 rounded-lg w-full md:max-w-[210px] max-w-[160px]'
                    type='button'
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={() => {setHover(true); setTimeout(() => {setHover(false)}, 1000)}}
                    onMouseLeave={() => setHover(false)}
                    children={
                        <>
                            <span className="lg:text-xl text-sm text-white group-hover:text-black font-medium">Get Started</span>
                            <img src={PartyBlower} alt="get started" className={`${hover ? "scale-0 invisible " : "visible scale-100"} transition-all duration-1000 ease-in-out  w-full h-auto max-w-[25px]`}  />
                        </>
                    }
                />
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar

