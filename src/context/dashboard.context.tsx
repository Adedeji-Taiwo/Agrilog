import { createContext, FC, useState, useMemo } from "react";



export interface DashboardContextType {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    showCreateJobModal: boolean,
    setShowCreateJobModal: React.Dispatch<React.SetStateAction<boolean>>
    showPayrollAlert: boolean
    setShowPayrollAlert:  React.Dispatch<React.SetStateAction<boolean>>
    showNewTaskAlert: boolean
    setShowNewTaskAlert:  React.Dispatch<React.SetStateAction<boolean>>
    showOnboardingAlert: boolean,
    setShowOnboardingAlert:React.Dispatch<React.SetStateAction<boolean>>
    showAddTeamLeadAlert: boolean
    setShowAddTeamLeadAlert:React.Dispatch<React.SetStateAction<boolean>>
    showReplaceTeamLeadAlert: boolean
    setShowReplaceTeamLeadAlert:React.Dispatch<React.SetStateAction<boolean>>
    showNewDeptAlert: boolean
    setShowNewDeptAlert:React.Dispatch<React.SetStateAction<boolean>>
    showGoalSetterAlert:boolean
    setShowGoalSetterAlert:React.Dispatch<React.SetStateAction<boolean>>
    showRequestOvertimeAlert:boolean
    setShowRequestOvertimeAlert: React.Dispatch<React.SetStateAction<boolean>>
    newDeptAddedAlert:boolean
    setNewDeptAddedAlert:React.Dispatch<React.SetStateAction<boolean>>
    showLeaveRequestAlert:boolean 
    setShowLeaveRequestAlert:React.Dispatch<React.SetStateAction<boolean>>
    showTodoAlert:boolean
    setShowTodoAlert:React.Dispatch<React.SetStateAction<boolean>>
    showNewAccountInfoAlert:boolean
    setShowNewAccountInfoAlert:React.Dispatch<React.SetStateAction<boolean>>
    showNewCompensationAlert:boolean
    setShowNewCompensationAlert:React.Dispatch<React.SetStateAction<boolean>>
    showAddNewPaymentGateway:boolean
    setShowAddNewPaymentGateway:React.Dispatch<React.SetStateAction<boolean>>
    showAddNewManager:boolean
    setShowAddNewManager:React.Dispatch<React.SetStateAction<boolean>>
    showAddNewManagerRole:boolean
    setShowAddNewManagerRole:React.Dispatch<React.SetStateAction<boolean>>
    handlePayrollDisplay: () => void,
    handleOnboardingAlert: () => void,
    activeTabIndex: string,
    setActiveTabIndex: React.Dispatch<React.SetStateAction<string>>
    activeSettingIndex: string,
    setActiveSettingIndex: React.Dispatch<React.SetStateAction<string>>
    currentLocation: { lat: number; lng: number } | null;
    setLocation: (lat: number, lng: number) => void;
    clockInTime: string | null,
    setClockInTime: React.Dispatch<React.SetStateAction<string | null>>
    clockOutTime: string | null,
    setClockOutTime: React.Dispatch<React.SetStateAction<string | null>>
}


export const DashboardContext = createContext<DashboardContextType | null>(null);





const DashboardProvider: FC<any> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [showCreateJobModal, setShowCreateJobModal] = useState<boolean>(false);
    const [activeTabIndex, setActiveTabIndex] = useState<string>("general");
    const [activeSettingIndex, setActiveSettingIndex] = useState<string>("Offboarding Templates");
    const [showPayrollAlert,  setShowPayrollAlert] = useState<boolean>(false);
    const [showAddTeamLeadAlert,  setShowAddTeamLeadAlert] = useState<boolean>(false);
    const [showReplaceTeamLeadAlert,  setShowReplaceTeamLeadAlert] = useState<boolean>(false);
    const [showNewTaskAlert,  setShowNewTaskAlert] = useState<boolean>(false);
    const [showNewDeptAlert,  setShowNewDeptAlert] = useState<boolean>(false);
    const [newDeptAddedAlert, setNewDeptAddedAlert] = useState<boolean>(false);
    const [showOnboardingAlert,  setShowOnboardingAlert] = useState<boolean>(false);
    const [showGoalSetterAlert,  setShowGoalSetterAlert] = useState<boolean>(false);
    const [showTodoAlert, setShowTodoAlert] = useState<boolean>(false);
    const [ showRequestOvertimeAlert, setShowRequestOvertimeAlert]= useState<boolean>(false)
    const [ showLeaveRequestAlert, setShowLeaveRequestAlert] = useState<boolean>(false)
    const [ showNewAccountInfoAlert, setShowNewAccountInfoAlert] = useState<boolean>(false)
    const [ showNewCompensationAlert, setShowNewCompensationAlert] = useState<boolean>(false)
    const [showAddNewManager,  setShowAddNewManager] = useState<boolean>(false);
    const [showAddNewManagerRole,  setShowAddNewManagerRole] = useState<boolean>(false);
    const [ showAddNewPaymentGateway, setShowAddNewPaymentGateway] = useState<boolean>(false)
    const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [clockInTime, setClockInTime] = useState<string | null>(null);
    const [clockOutTime, setClockOutTime] = useState<string | null>(null);


     //handle new job info button to initialize pop-up
     const handlePayrollDisplay = () => {
        setShowPayrollAlert(true);
     
    };

    //handle onboarding task assignment
    const handleOnboardingAlert = () => {
        setShowOnboardingAlert(true);
    }

    //handle location data
    const setLocation = (lat: number, lng: number) => {
        setCurrentLocation({ lat, lng });
      };


  
    

    const values = useMemo(
        () => ({ 
            open,
            setOpen,
            showCreateJobModal,
            setShowCreateJobModal,
            showPayrollAlert,
            setShowPayrollAlert,
            handlePayrollDisplay,
            showOnboardingAlert,  
            setShowOnboardingAlert,
            handleOnboardingAlert,
            showGoalSetterAlert,  
            setShowGoalSetterAlert,
            showAddTeamLeadAlert,  
            setShowAddTeamLeadAlert,
            showNewTaskAlert,  
            setShowNewTaskAlert,
            showNewDeptAlert,  
            setShowNewDeptAlert,
            showReplaceTeamLeadAlert,
            newDeptAddedAlert,
            setNewDeptAddedAlert,
            setShowReplaceTeamLeadAlert,
            showTodoAlert, 
            setShowTodoAlert,
            showRequestOvertimeAlert, 
            setShowRequestOvertimeAlert,
            showLeaveRequestAlert, 
            setShowLeaveRequestAlert,
            showNewAccountInfoAlert, 
            setShowNewAccountInfoAlert,
            showNewCompensationAlert, 
            setShowNewCompensationAlert,
            activeTabIndex, 
            setActiveTabIndex,
            activeSettingIndex, 
            setActiveSettingIndex,
            showAddNewManager,  
            setShowAddNewManager,
            showAddNewManagerRole,  
            setShowAddNewManagerRole,
            showAddNewPaymentGateway,
            setShowAddNewPaymentGateway,
            currentLocation, 
            setLocation,
            clockInTime, 
            setClockInTime,
            clockOutTime, 
            setClockOutTime
        }),
        [
            open,
            setOpen,
            showCreateJobModal,
            setShowCreateJobModal,
            showPayrollAlert,
            setShowPayrollAlert,
            handlePayrollDisplay,
            showOnboardingAlert,  
            setShowOnboardingAlert,
            showGoalSetterAlert,  
            setShowGoalSetterAlert,
            handleOnboardingAlert,
            showNewTaskAlert,  
            setShowNewTaskAlert,
            showAddTeamLeadAlert,  
            setShowAddTeamLeadAlert,
            showReplaceTeamLeadAlert, 
            showTodoAlert, 
            setShowTodoAlert,
            setShowReplaceTeamLeadAlert,
            showNewDeptAlert,  
            newDeptAddedAlert,
            setNewDeptAddedAlert,
            setShowNewDeptAlert,
            showRequestOvertimeAlert, 
            setShowRequestOvertimeAlert,
            showLeaveRequestAlert, 
            setShowLeaveRequestAlert,
            showNewAccountInfoAlert, 
            setShowNewAccountInfoAlert,
            showNewCompensationAlert, 
            setShowNewCompensationAlert,
            activeTabIndex, 
            setActiveTabIndex,
            activeSettingIndex, 
            setActiveSettingIndex,
            showAddNewManager,  
            setShowAddNewManager,
            showAddNewManagerRole,  
            setShowAddNewManagerRole,
            showAddNewPaymentGateway,
            setShowAddNewPaymentGateway,
            currentLocation, 
            setLocation,
            clockInTime, 
            setClockInTime,
            clockOutTime, 
            setClockOutTime
        ])

    return (
        <DashboardContext.Provider 
            value={values }
        >
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;