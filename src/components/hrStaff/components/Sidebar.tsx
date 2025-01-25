import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { dashboardSidebarRoutes } from '../../../constants/hrStaff/sidebar';






type SidebarProps = {
  open: boolean,
  setOpen: (value: React.SetStateAction<boolean>) => void,

}


const Sidebar: FC<SidebarProps> = ({ open, setOpen }) => {
const navigate = useNavigate();

  return (
    <aside className={`${open ? "fixed inset-0 z-[60] h-screen origin-left duration-300 w-4/6 md:w-4/12 scale-x-1 transition lg:pt-7 md:pt-20 pt-16 pl-3" : "ml-[-100%] lg:ml-0 w-0 lg:w-auto lg:relative fixed transform lg:transform-none scale-x-0 lg:col-span-1"} flex flex-col items-center justify-start  xl:gap-3 md:gap-[9px] gap-[6px] xl:p-[18px] lg:p-[14px] md:p-[9px] p-2 xl:ml-[18px] lg:ml-[13.5px] lg:rounded-3xl rounded-xl xl:border-[2.5px] border-[1.9px] border-[#e3f5c8] bg-dashboard-bg overflow-hidden`}>
      {dashboardSidebarRoutes.map((route) => (
        <NavLink
          to={route.path!}
          onClick={() => setOpen(false)}
          key={route.name}
          style={{ textDecoration: 'none' }}
          className={({ isActive }) =>
            isActive ? "bg-primary text-white hover:text-[#f4f3f6] shadow-dbButtonActive relative group flex items-start justify-start rounded-xl no-underline xl:py-[25px] lg:py-[19px] xl:px-6 lg:px-[18px] p-3 w-full" : "bg-white text-[#464255] hover:text-primary shadow-dbButton relative group flex items-start justify-start rounded-xl xl:py-[25px] lg:py-[19px] xl:px-6 lg:px-[18px] p-3 w-full no-underline"
          }>
          <p className='w-full flex items-center xl:gap-8 lg:gap-6 gap-4'>
            {route.icon}
            <span className={`font-roboto xl:font-black lg:font-extrabold font-bold xl:text-base lg:text-sm text-xs`}>{route.name}</span>
          </p>

        </NavLink>
      )
      )}


      <div className='flex items-end justify-center w-full xl:px-[18.5px] xl:pt-[107px] xl:pb-7 lg:px-[14px] px-[9px] md:pt-20 lg:pt-[81px] pt-10  lg:pb-[21px] pb-[14px] bg-white rounded-xl'>
        <button
          onClick={() => navigate('/user/login')}
          className={`relative group flex items-center justify-between rounded-xl xl:py-[25px] lg:py-[19px] xl:px-6 lg:px-[18px] px-3 py-3 w-full bg-[#e3f5c8] hover:bg-primary shadow-dbButton group-hover:shadow-dbButtonActive`}
        >
          <span className={` group-hover:text-white text-primary font-roboto xl:font-black lg:font-extrabold font-bold xl:text-sm md:text-xs text-[10px] leading-4`}>Logout</span>
          <svg className={`xl:w-5 xl:h-5 lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-current text-primary group-hover:text-white`} fillRule="evenodd" clipRule="evenodd" d="M18.4071 8.57774L4.62867 8.57774L10.6483 2.55816C11.1293 2.07708 11.1293 1.28763 10.6483 0.806555C10.1672 0.325482 9.39006 0.325482 8.90899 0.806555L0.78008 8.93546C0.299007 9.41654 0.299007 10.1937 0.78008 10.6747L8.89665 18.816C9.12711 19.047 9.44 19.1768 9.76628 19.1768C10.0926 19.1768 10.4055 19.047 10.6359 18.816C11.117 18.3349 11.117 17.5578 10.6359 17.0767L4.62867 11.0448L18.4071 11.0448C19.0855 11.0448 19.6406 10.4897 19.6406 9.81126C19.6406 9.13283 19.0855 8.57774 18.4071 8.57774Z" />
          </svg>
        </button>
      </div>
    </aside>
  )
}


export default Sidebar


