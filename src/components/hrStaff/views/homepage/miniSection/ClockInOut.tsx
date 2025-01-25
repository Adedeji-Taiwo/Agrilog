import { useContext, useEffect, useState } from 'react'
import { Button } from '../../../components';
import { DashboardContext, DashboardContextType } from "../../../../../context/dashboard.context";
import {toast} from 'react-hot-toast';




const ClockInOut = () => {
    const {currentLocation, setClockInTime, setClockOutTime} = useContext(DashboardContext) as DashboardContextType;
    const [message, setMessage] = useState('');
    const [isClockedIn, setIsClockedIn] = useState(false);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [buttonState, setButtonState] = useState<'inactive' | 'active' | 'failed'>('inactive');
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
   

  
    // Preset location (Farm's latitude and longitude)
    const farmLocation = { lat: 33.982192, lng: -6.7253268 }; // Example: Tokyo coordinates



//for round the clock time and date
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);


  //register clockin and out times
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };



  // Start the timer
  useEffect(() => {
    let timer: any;

    if (isClockedIn) {
      timer = setInterval(() => {
        if (startTime) {
          const now = new Date();
          const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000); // Difference in seconds
          setElapsedTime(diff);
        }
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [isClockedIn, startTime]);
  
  

  // Single useEffect to handle toast messages
  useEffect(() => {
    if (message === 'Location not available.') {
      toast.error(
        <span className="text-blackish xl:text-lg lg:text-base text-sm">{message}</span>,
        { duration: 6000 }
      );
    } else if (message === 'Attendance Success') {
      toast.success(
        <span className="text-blackish xl:text-lg lg:text-base text-sm">{message}</span>,
        { duration: 6000 }
      );
    } else if (message === 'Attendance Failed - Wrong Location') {
      toast.error(
        <span className="text-blackish xl:text-lg lg:text-base text-sm">{message}</span>,
        { duration: 6000 }
      );
    }
  }, [message]);


  
  
  const handleClockIn = () => {
    if (!currentLocation) {
      setMessage('You are not within Location.');
      setButtonState('failed');
      return;
    }

    // Compare current location with the farm location
    const distance = Math.sqrt(
      Math.pow(currentLocation.lat - farmLocation.lat, 2) +
        Math.pow(currentLocation.lng - farmLocation.lng, 2)
    );

    // Set a threshold (for example, 0.01 degrees latitude/longitude difference)
    const threshold = 100;

    if (distance <= threshold) {
      setIsClockedIn(true);
      setClockInTime(getCurrentTime());
      setStartTime(new Date());
      setMessage('Attendance Success');
      setButtonState('active');
    } else {
      setMessage('Attendance Failed - Wrong Location');
      setButtonState('failed');
    }
  };





  const handleClockOut = () => {
    if (isClockedIn) {
      const clockOutTime = new Date();
      const clockOutDetails = `Clocked out at: ${clockOutTime.toLocaleString()}`;
      alert(clockOutDetails);

      setIsClockedIn(false);
      setElapsedTime(0);
      setStartTime(null);
      setClockOutTime(getCurrentTime());
      setMessage('Clocked out successfully.');
      setButtonState('inactive');
    }
  };



  // Format the elapsed time into HH:MM:SS
  const formatElapsedTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };



   
    //time and date
    const formatTimeDate = (date: Date): string => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' }); // e.g., 'Jan'
  
      return `${hours}:${minutes.toString().padStart(2, '0')} - ${day} ${month}`;
    };


    
      
       

  return (
    <div className='font-gothic w-full flex flex-col items-center justify-center xl:gap-7 lg:gap-[21px] gap-[14px] border-[0.5px] border-[#bbb] rounded-[5px] xl:px-5 xl:pt-3 xl:pb-[42px] lg:px-[15px] lg:pt-[9px] lg:pb-8 px-[10px] pt-[6px] pb-[21px]'>
                <p className='flex items-center justify-between w-full'>
                    <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>Clock In/Out</span>
                    <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'> {formatTimeDate(currentDateTime)}</span>
                </p>
                <Button 
                    className={`${buttonState === 'active' ? "bg-[#0cbc8b]" : buttonState === 'inactive' ? "bg-primary" : "bg-[#db1515]" } w-full transition py-6`}
                    type='button'
                     onClick={isClockedIn ? handleClockOut : handleClockIn}
                    children={
                        <>
                            <svg className='xl:w-[21px] xl:h-5 lg:w-4 lg:h-[15px] w-[11px] h-[11px]' viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 9.75439V6.75439L14.5 10.7544L9.5 14.7544V11.7544H0.5V9.75439H9.5ZM1.958 13.7544H4.082C4.78005 15.4735 6.05371 16.8966 7.68512 17.7803C9.31652 18.6641 11.2043 18.9535 13.0255 18.5991C14.8468 18.2448 16.4883 17.2686 17.6693 15.8376C18.8503 14.4067 19.4975 12.6098 19.5 10.7544C19.501 8.89705 18.8558 7.09723 17.6749 5.66362C16.494 4.23001 14.8511 3.25195 13.028 2.89721C11.2048 2.54246 9.31505 2.83314 7.68278 3.71937C6.05051 4.60561 4.77747 6.03218 4.082 7.75439H1.958C3.232 3.69739 7.022 0.754395 11.5 0.754395C17.023 0.754395 21.5 5.23139 21.5 10.7544C21.5 16.2774 17.023 20.7544 11.5 20.7544C7.022 20.7544 3.232 17.8114 1.958 13.7544Z" fill="white"/>
                            </svg>
                            <span className='xl:font-extrabold lg:font-bold xl:text-[15px] leading-4 md:text-[13px] text-xs text-white mt-1'> 
                              {isClockedIn
                                ? `Clock Out (${formatElapsedTime(elapsedTime)})`
                                : 'Clock In Oh: OOM: 00S'}
                            </span>
                        </>
                    }
                />
    </div>
  )
}

export default ClockInOut;

