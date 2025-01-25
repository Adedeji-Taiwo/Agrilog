import {useContext, useEffect} from 'react'
import { Route, Routes } from "react-router-dom"
import { HrStaffDashboard, LoginUser, RegisterUser, VerifyCompany } from "./pages";
import { HomepageUser, Payslip, PerformanceUser, StaffInformation} from './components/hrStaff/views';
import { HrStaffOverlay } from './components/hrStaff/components';
import { DashboardContext, DashboardContextType } from "./context/dashboard.context";
import { Toaster } from 'react-hot-toast';


function App() {
  const {open, setOpen, showOnboardingAlert, showGoalSetterAlert, showTodoAlert, showRequestOvertimeAlert, showLeaveRequestAlert, showNewAccountInfoAlert, setLocation} = useContext(DashboardContext) as DashboardContextType;

  

  useEffect(() => {
    // Check if geolocation is available
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Save the location (lat, lng)
          const { latitude, longitude } = position.coords;
          setLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location', error);
          alert('Please enable location access to use this feature.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, [setLocation]);





  return (
    <div className="relative z-0 bg-white">
          <Toaster />
          <HrStaffOverlay  open={open} setOpen={setOpen} showRequestOvertimeAlert={showRequestOvertimeAlert} showOnboardingAlert={showOnboardingAlert} showLeaveRequestAlert={showLeaveRequestAlert} showTodoAlert={showTodoAlert}   showGoalSetterAlert={showGoalSetterAlert}  showNewAccountInfoAlert={showNewAccountInfoAlert} />
          <Routes>
            <Route element={<HrStaffDashboard open={open} setOpen={setOpen} />}>
              <Route path="/" element={<HomepageUser />} />
              <Route path="/user/payslip" element={<Payslip />} />
              <Route path="/user/performance" element={<PerformanceUser />} />
              <Route path='/user/staff-information' element={<StaffInformation />}/>
            </Route>
            <Route path="/user/register" element={<RegisterUser />} />
            <Route path="/user/login" element={<LoginUser />} />
            <Route path="/user/verify" element={<VerifyCompany />} />
          </Routes>
    </div>
  )
}

export default App
