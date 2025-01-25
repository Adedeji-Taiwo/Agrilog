import React, { FC } from 'react'
import { Sidebar, Mainbar, Header } from '../../components/hrStaff/components'

type HrStaffDashboardPropTypes = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HrStaffDashboard: FC<HrStaffDashboardPropTypes> = ({ open, setOpen }) => {

  return (
    <div className='w-full grid lg:grid-cols-5 grid-cols-1 xl:gap-y-7 lg:gap-y-[21px] xl:gap-x-4 lg:gap-x-3 bg-[#f9fafb]'>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Mainbar />
    </div>
  )
}

export default HrStaffDashboard