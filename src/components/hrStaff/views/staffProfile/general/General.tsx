import React, { FC } from 'react'
import {PersonalInfoContainer, HomeAddressContainer, NextOfKinContainer, SalaryInformationContainer} from './subGenerals'

type GeneralPropTypes = {
    general: {
        personalInfo: {
            fullName: string,
            dateOfBirth: string,
            email: string,
            gender: string,
            number: string,
            martialStatus: string,
        },
        homeAddress: {
            fullAddress:string,
            city: string,
            state: string,
        },
        nextOfKin: {
            fullName: string,
            phoneNumber: string,
            fullAddress:string,
            relationship: string,
        },
        salaryInformation: {
            bankName: string,
            accountNumber:string,
            employmentType: string,
            accountName: string,
            monthlySalary: string,
        }
      }
}





const StaffProfile:FC<GeneralPropTypes> = ({general:{personalInfo, homeAddress, nextOfKin, salaryInformation} }) => {  
    return (
    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400" className='order-3 lg:col-start-2 lg:col-end-5 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3'>
       
       <PersonalInfoContainer 
            personalInfo={personalInfo}
       />

       <HomeAddressContainer 
            homeAddress={homeAddress}
       />
       
        <NextOfKinContainer 
            nextOfKin={nextOfKin}
        />

        <SalaryInformationContainer 
            salaryInformation={salaryInformation}
        />    
    </div>
    )
}

export default StaffProfile
