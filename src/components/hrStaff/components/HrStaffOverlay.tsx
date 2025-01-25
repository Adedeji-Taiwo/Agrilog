import React, {FC} from 'react'

type OverlayProp = {
    open: boolean,
    showOnboardingAlert: boolean
    showTodoAlert:boolean
    showGoalSetterAlert: boolean
    showRequestOvertimeAlert: boolean
    showLeaveRequestAlert: boolean
    showNewAccountInfoAlert: boolean
    setOpen: (value: React.SetStateAction<boolean>) => void,
}


const Overlay:FC<OverlayProp> = ({open, setOpen, showOnboardingAlert, showTodoAlert, showRequestOvertimeAlert, showGoalSetterAlert, showLeaveRequestAlert, showNewAccountInfoAlert}) => {

  return (
    <> 
        {open && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block lg:hidden z-50`} onClick={() => setOpen(false)}></div>}
        { showOnboardingAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
        { showTodoAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
        { showRequestOvertimeAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
        { showGoalSetterAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
        { showLeaveRequestAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
        { showNewAccountInfoAlert && <div className={`bg-black opacity-30 fixed inset-0 w-full h-full block z-[100]`}></div>}
    </>
  )
}

export default Overlay;