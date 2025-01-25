import {profileOne, profileTwo, profileThree, profileFour, profileFive} from '../../assets/dashboard/employees/index';



export const staffData = [
  {
    id: "21",
    overview: {
      fullName: "Youssef Boussouf",
      role: "Farm Manager",
      status: "Not Active",
      attendanceStatus: "Absent",
      designation: "team lead",
      department:"Agriculture",
      workType: "Onsite",
      dateHired: "28-Feb-2023",
      email: "youssef@gmail.com",
      number: "+2126053458723",
      photo: profileOne,
    },
    general: {
      personalInfo: {
        fullName: "Youssef Boussouf",
        dateOfBirth: "09/09/1980",
        email: "youssef@gmail.com",
        gender: "Male",
        number: "+2126053458723",
        martialStatus: "Married"
      },
      homeAddress: {
        fullAddress:"14, Rue Hassan, Safi",
        city: "Casablanca",
        state: "Casablanca",
      },
      nextOfKin: {
        fullName: "Mohammed Boussouf",
        phoneNumber: "+2126086456447",
        fullAddress:"14, Rue Hassan, Safi",
        relationship: "Sibling"
      },
      salaryInformation: {
        bankName: "Attijariwafa Bank",
        accountNumber: "0023485682",
        employmentType: "full time",
        accountName: "Youssef Boussouf",
        monthlySalary: "500,000"
      }
    },
    job: {
      employmentInfo: {
        employeeId: "-",
        probationStartDate: "-",
        probationEndDate: "-",
        dateOnboarded: "03/09/2020",
        contractStart: "03/09/2020",
        contractEnd: "-",
      },
      jobTimeline: [
        {
        effectiveDate: "",
        jobTitle: "",
        positionType: "",
        fullAddress: "",
        employmentType: "",
        lineManager: "",
        department: "",
      }
      ],
      workSchedule: {
        currentSchedule: "Mon -Fri, 40hrs/week",
        standardWorkingTime: "8hrs00m",
        scheduleType: "Duration Based",
        dailyWorkingHours: ["Monday 8h 00m", "Tuesday 8h 00m", "Wednesday 8h 00m", "Thursday 8h 00m", "Friday 8h 00m"]
      },
      jobHistory: {
        year: "2023",
      }
    },
    payroll: {
      general: {
        employeeId: "-",
        calculateSalary: ["test 1", "test 2", "test 3"],
        currency: "Dirham",
        BasicSalary: "400,000",
        yearGross: "5,000,000,000"
      },
      compensationSettings: {
        effectiveDate: "03/09/2023",
        compType: "Airtime",
        CompAmount: "100,000",
        frequency: "monthly",
      },
      deductions: {
        pension: "10th of Basic",
        nationalHousingFund: "2% of Basic",
        pensionAccountInfo: "002389 Casablanca State Pension",
        incomeTax: "10% of Basic",
        HMO: "10% of Basic",
        HNSAccountInfo: "12024 NHS"
      }
    },
    documents: {
      label: "documents",
    },
    accountSettings: {
      accountSettings: {
        timezone: "GMT +07:00 Bangkok, Ha Noi, Jakarta",
      },
      clockInSettings: {
        location: "110023 Casablanca",
      }
    }
  },
  {
    id: "22",
    overview: {
      fullName: "Hassan Ayoub",
      role: "Agronomist",
      designation: "team lead",
      number: "06148930984",
      email: "hassanayoub@gmail.com",
      dateHired: "17-Mar-2023",
      status: "Active",
      attendanceStatus: "Present",
      department:"Agriculture",
      workType: "Contract",
      photo: profileTwo,
    },
    general: {
      personalInfo: {
        fullName: "Hassan Ayoub",
        dateOfBirth: "19/12/1990",
        email: "hassanayoub@gmail.com",
        gender: "Male",
        number: "+2126148930984",
        martialStatus: "Married"
      },
      homeAddress: {
        fullAddress:"19, Avenue Al-Jazeera, Marrakesh",
        city: "Marrakesh",
        state: "Marrakesh",
      },
      nextOfKin: {
        fullName: "Mohammed Ayoub",
        phoneNumber: "+2126083745603",
        fullAddress:"19, Avenue Al-Jazeera, Marrakesh",
        relationship: "Parent"
      },
      salaryInformation: {
        bankName: "Crédit Agricole",
        accountNumber: "0193495682",
        employmentType: "contract",
        accountName: "Hassan Ayoub",
        monthlySalary: "3,500 MAD"
      }
    },
    job: {
      employmentInfo: {
        employeeId: "",
        probationStartDate: "",
        probationEndDate: "",
        dateOnboarded: "03/09/2020",
        contractStart: "03/09/2020",
        contractEnd: ""
      },
      jobTimeline: [
        {
        effectiveDate: "",
        jobTitle: "",
        positionType: "",
        fullAddress: "",
        employmentType: "",
        lineManager: "",
        department: "",
      }
      ],
      workSchedule: {
        currentSchedule: "Mon -Fri, 40hrs/week",
        standardWorkingTime: "8hrs00m",
        scheduleType: "Duration Based",
        dailyWorkingHours: ["Monday 8h 00m", "Tuesday 8h 00m", "Wednesday 8h 00m", "Thursday 8h 00m", "Friday 8h 00m"]
      },
      jobHistory: {
        year: "2023",
      }
    },
    payroll: {
      general: {
        employeeId: "-",
        calculateSalary: ["test 1", "test 2", "test 3"],
        currency: "Dirham",
        BasicSalary: "200,000",
        yearGross: "4,000,000,000"
      },
      compensationSettings: {
        effectiveDate: "23/01/2023",
        compType: "Monetary",
        CompAmount: "200,000",
        frequency: "Quarterly",
      },
      deductions: {
        pension: "5th of Basic",
        nationalHousingFund: "2% of Basic",
        pensionAccountInfo: "002389 Marrakesh State Pension",
        incomeTax: "5% of Basic",
        HMO: "5% of Basic",
        HNSAccountInfo: "12358 NHS"
      },
    },
    documents: {
      label: "documents",
    },
    accountSettings: {
      accountSettings: {
        timezone: "GMT +07:00 Bangkok, Ha Noi, Jakarta",
      },
      clockInSettings: {
        location: "110023 Marrakesh",
      }
    }
  },
  {
    id: "23",
    overview: {
      fullName: "Adil Idrissi",
      role: "Farm Worker",
      designation: "Section lead",
      department: "Orchards",
      number: "06183940989",
      email: "adilidrissi@gmail.com",
      dateHired: "22-Jan-2023",
      status: "Active",
      attendanceStatus: "Present",
      workType: "Onsite",
      photo: profileThree,
    },
    general: {
      personalInfo: {
        fullName: "Adil Idrissi",
        dateOfBirth: "23/02/2000",
        email: "adilidrissi@gmail.com",
        gender: "Male",
        number: "+2126183940989",
        martialStatus: "Married"
      },
      homeAddress: {
        fullAddress:"101, Cater close, Tangier",
        city: "Tangier",
        state: "Tangier",
      },
      nextOfKin: {
        fullName: "Salma Idrissi",
        phoneNumber: "+2126093745609",
        fullAddress:"101, Cater close, Tangier",
        relationship: "Spouse"
      },
      salaryInformation: {
        bankName: "Banque de la Populaire",
        accountNumber: "0234695681",
        employmentType: "fulltime",
        accountName: "Adil Idrissi",
        monthlySalary: "4000 MAD"
      }
    },
    job: {
      employmentInfo: {
        employeeId: "",
        probationStartDate: "",
        probationEndDate: "",
        dateOnboarded: "03/09/2020",
        contractStart: "03/09/2020",
        contractEnd: ""
      },
      jobTimeline: [
        {
        effectiveDate: "",
        jobTitle: "",
        positionType: "",
        fullAddress: "",
        employmentType: "",
        lineManager: "",
        department: "",
      }
      ],
      workSchedule: {
        currentSchedule: "Mon -Fri, 40hrs/week",
        standardWorkingTime: "8hrs00m",
        scheduleType: "Duration Based",
        dailyWorkingHours: ["Monday 8h 00m", "Tuesday 8h 00m", "Wednesday 8h 00m", "Thursday 8h 00m", "Friday 8h 00m"]
      },
      jobHistory: {
        year: "2023",
      }
    },
    payroll: {
      general: {
        employeeId: "-",
        calculateSalary: ["test 1", "test 2", "test 3"],
        currency: "Dirham",
        BasicSalary: "300,000",
        yearGross: "4,000,000,000"
      },
      compensationSettings: {
        effectiveDate: "23/01/2023",
        compType: "Monetary",
        CompAmount: "150,000",
        frequency: "Monthly",
      },
      deductions: {
        pension: "6th of Basic",
        nationalHousingFund: "2% of Basic",
        pensionAccountInfo: "002389 Tangier State Pension",
        incomeTax: "6% of Basic",
        HMO: "6% of Basic",
        HNSAccountInfo: "12358 NHS"
      },
    },
    documents: {
      label: "documents",
    },
    accountSettings: {
      accountSettings: {
        timezone: "GMT +07:00 Bangkok, Ha Noi, Jakarta",
      },
      clockInSettings: {
        location: "110023 Tangier",
      }
    }
  },
  {
    id: "24",
    overview: {
      fullName: "Sara Kadiri",
      role: "Designer",
      designation: "team member",
      department: "Design",
      number: "06172034049",
      email: "sarakadiri@gmail.com",
      dateHired: "16-Jan-2023",
      status: "Active",
      attendanceStatus: "Present",
      workType: "Full Time",
      photo: profileFour,
    },
    general: {
      personalInfo: {
        fullName: "Sara Kadiri",
        dateOfBirth: "11/04/1995",
        email: "sarakadiri@gmail.com",
        gender: "Female",
        number: "+2126172034049",
        martialStatus: "Single"
      },
      homeAddress: {
        fullAddress:"13, Settimana Avenue, Rabat",
        city: "Rabat",
        state: "Rabat",
      },
      nextOfKin: {
        fullName: "Amira Kadiri",
        phoneNumber: "+2126093845078",
        fullAddress:"13, Settimana Avenue, Rabat",
        relationship: "Sister"
      },
      salaryInformation: {
        bankName: "BMCE Bank",
        accountNumber: "0913489672",
        employmentType: "fulltime",
        accountName: "Sara Kadiri",
        monthlySalary: "300,000"
      }
    },
    job: {
      employmentInfo: {
        employeeId: "",
        probationStartDate: "",
        probationEndDate: "",
        dateOnboarded: "03/09/2020",
        contractStart: "03/09/2020",
        contractEnd: ""
      },
      jobTimeline: [
        {
        effectiveDate: "",
        jobTitle: "",
        positionType: "",
        fullAddress: "",
        employmentType: "",
        lineManager: "",
        department: "",
      }
      ],
      workSchedule: {
        currentSchedule: "Mon -Fri, 40hrs/week",
        standardWorkingTime: "8hrs00m",
        scheduleType: "Duration Based",
        dailyWorkingHours: ["Monday 8h 00m", "Tuesday 8h 00m", "Wednesday 8h 00m", "Thursday 8h 00m", "Friday 8h 00m"]
      },
      jobHistory: {
        year: "2023",
      }
    },
    payroll: {
      general: {
        employeeId: "-",
        calculateSalary: ["test 1", "test 2", "test 3"],
        currency: "Dirham",
        BasicSalary: "300,000",
        yearGross: "3,600,000,000"
      },
      compensationSettings: {
        effectiveDate: "23/01/2023",
        compType: "Monetary",
        CompAmount: "300,000",
        frequency: "Monthly",
      },
      deductions: {
        pension: "10% of Basic",
        nationalHousingFund: "2% of Basic",
        pensionAccountInfo: "002389 Rabat State Pension",
        incomeTax: "3% of Basic",
        HMO: "3% of Basic",
        HNSAccountInfo: "12345 NHS"
      },
    },
    documents: {
      label: "documents",
    },
    accountSettings: {
      accountSettings: {
        timezone: "GMT +07:00 Bangkok, Ha Noi, Jakarta",
      },
      clockInSettings: {
        location: "110023 Rabat",
      }
    }
  },
  // Add more staff data as needed
];





export type StaffDataTypes = {
    id: string,
    overview: {
      fullName: string,
      role: string,
      department: string
      workType: string,
      photo: string,
      status: string,
      attendanceStatus:  string,
      designation:  string,
      dateHired: string,
      email:  string,
      number:  string,
  },
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
      },
      payroll: {
        general: {
          employeeId: string,
          calculateSalary: string[],
          currency: string,
          BasicSalary: string,
          yearGross: string,
        },
        compensationSettings: {
          effectiveDate: string,
          compType: string,
          CompAmount: string,
          frequency: string,
        },
        deductions: {
          pension: string,
          nationalHousingFund: string,
          pensionAccountInfo: string,
          incomeTax: string,
          HMO: string,
          HNSAccountInfo: string,
        },
      },
      job: {
        employmentInfo: {
            employeeId: string,
            probationStartDate: string,
            probationEndDate: string,
            dateOnboarded: string,
            contractStart: string,
            contractEnd: string,
        },
        jobTimeline: {
            effectiveDate: string,
            jobTitle: string,
            positionType: string,
            fullAddress: string,
            employmentType: string,
            lineManager: string,
            department: string,
        }[],
        workSchedule: {
            currentSchedule: string,
            standardWorkingTime: string,
            scheduleType: string,
            dailyWorkingHours: string[],
        },
        jobHistory: {
            year: string,
        },
    },
    accountSettings: {
      accountSettings: {
        timezone: string,
      },
      clockInSettings: {
        location: string,
      }
    }
}