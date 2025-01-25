import React, { useContext } from 'react'
import { Header, Charts, Table } from './components'
import { DashboardContext, DashboardContextType } from '../../../../context/dashboard.context';


const Performance = () => {
  const {showGoalSetterAlert, setShowGoalSetterAlert} = useContext(DashboardContext) as DashboardContextType;


  return (
   <div className='flex items-start justify-start xl:mr-24 lg:mr-[72px]'>
       <div className='flex  flex-col items-start justify-start xl:gap-12 lg:gap-8 gap-6 w-full'>
        <Header 
           setShowGoalSetterAlert={setShowGoalSetterAlert}
        />
        <Charts />
        <Table 
          showGoalSetterAlert={showGoalSetterAlert} 
          setShowGoalSetterAlert={setShowGoalSetterAlert}
        />
      </div>
   </div>
  )
}

export default Performance