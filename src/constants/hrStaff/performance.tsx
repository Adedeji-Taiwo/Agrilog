import { iconOne, iconTwo, iconThree } from '../../assets/dashboard/performance'
  
  
 export const PerformanceData = [
      {
        id: 1,
        icon: iconOne,
        title: "Harvesting",
        completion: 90
      },
      {
        id: 2,
        icon: iconTwo,
        title: "Irrigation",
        completion: 70
      },
      {
        id: 3,
        icon: iconThree,
        title: "Weeding",
        completion: 85
      }
  ]


  export const PerformanceTableData = [
    {
        id:1,
        title: "Planting Crops",
        goal: "Plant 200 tomato seedlings this week",
        goalType: "",
        deadline: 'Apr 15',
        status: "Completed",
        reminderFreq: "hourly"
    },
    {
        id: 2,
        title: "Health Check",
        goal: "Perform health check on all cattle",
        goalType: "",
        deadline: 'Apr 15',
        status: "Overdue",
        reminderFreq: "hourly"
    },
    {
        id: 3,
        title: "Fertilization",
        goal: "Apply organic fertilizer to vegetable beds",
        goalType: "",
        deadline: 'Apr 15',
        status: "Due Soon",
        reminderFreq: "hourly"
    },
    {
        id: 4,
        title: "Weeding",
        goal: "Weed the rice field in sections 3 & 4",
        goalType: "",
        deadline: 'Apr 15',
        status: "Overdue",
        reminderFreq: "hourly"
    }
  ]