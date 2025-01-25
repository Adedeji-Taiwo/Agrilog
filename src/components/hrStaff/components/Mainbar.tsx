import React from 'react'
import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <main className='lg:col-span-4 w-full lg:px-0 lg:pt-0 lg:pb-24 p-5 pb-10'>
        <Outlet />
    </main>
  )
}

export default Mainbar;