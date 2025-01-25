import { VectorOne, VectorTwo, VectorThree, VectorFour, TalentSourcing, coreHr, payroll } from "../assets/tabs";
import { Employees, Times, Performances, Onboardings, Recruits, Payrolls } from "../assets/features";




//sub menu
export const menuData = {
    companyOne: [
        "About Us",
        "Library",
        "Resources",
        "Newsletter",
    ],
    companyTwo: [
        "Partners",
        "License",
        "Contact Us",
        "Support Center"
    ],
    companyThree: [
        "FAQs",
        "Privacy",
        "Request",
        "Vision"
    ],
    productsOne:[
        "Beta",
        "Blog",
        "Playground",
        "Pro Version",
    ],
    productsTwo: [
        "Launch Now",
        "Marketing",
        "Adverts",
        "Media Cover",
    ],
    productsThree: [
        "Buy",
        "Test",
        "Explore",
        "Rent"
    ]
}

//hero text
export const heroText = {
    header: ["Hire,", "Manage", "&", "Pay", "Your", "Technical", "Talents", "Wherever,", "Whenever..."],
    subHeaderOne: [
        "There is no need to use many tools for your people management."
    ],
    subHeaderTwo: [
        "Take advantage of our all-in-one software to streamline your HR."
    ]
}


//brand
export const brandTitle = "TRUSTED BY TOP COMPANIES WORLDWIDE"

//tabs
export const tabsData = [
    {
      label: "Talent Sourcing",
      content: {
        title:  "Talent Sourcing",
        subtitle: "We maintain an elite network of pre-vetted African technical talents who are tested, graded and effectively matched with our partners in an integrated talent and project management ecosystem.",
        lists: [
            {
                icon: VectorOne,
                text: "When screening talents, we determine how each prospect will fit into that structure in addition to possessing the appropriate skill set to excel in the job opportunity."
            },
            {
                icon: VectorTwo,
                text: "We also facilitate exclusive talent management support from start to finish, providing consistent performance management and evaluation for every talent assigned to your company."
            }
        ]
      },
      img: TalentSourcing,
    },
    {
      label: "CoreHR Software",
      content: {
        title:  "CoreHR Software",
        subtitle: "Managing people is difficult. Automate your Human Resources Management with our HR Software that your employees will enjoy. Optimize your time as much possible and increase productivity with streamlined processes.",
        lists: [
            {
                icon: VectorThree,
                text: "Onboard new employees online to reduce paper processes and data entry.  Automatically sync your new hires into your employees database."
            },
            {
                icon: VectorFour,
                text: "Develop a performance evaluation process that works well for your employees and company. Create goals to give employees a clear career development path."
            }
        ],
      },
      img: coreHr,
    },
    {
        label: "Payroll Management",
        content: {
            title:  "Payroll Management",
            subtitle: "Our cloud-based payroll software enables HR and payroll teams to stay in control of payroll and deliver the right pay on the right day. You can empower your teams to consistently deliver the payroll promise whilst saving time, reducing errors and future-proofing your system with our payroll software.",
            lists: [
                {
                    icon: VectorThree,
                    text: "Modern and friendly to use, our payroll systems are completely online, which means each time you login, you know you're using the very latest and most up-to-date technology."
                }
            ],
          },
          img: payroll,
    }
  ];




export const features = {
    title: "End-to-End HR Management System Built By Managers for Managers",
    subtitle: "RendaHR is an all-in-one HR platform for modern companies who want to centralize all their HR, automate repetitive procedures and empower employees to full potential.",
    feature: [
        {
            header: "Recruitment & Staff Sourcing",
            subHeader: "Hire fast and streamline recruitment to create best candidate experience.",
            icon: Recruits
        },
        {
            header: "Onboarding",
            subHeader: "Speedy Onboarding from anywhere and any device.",
            icon: Onboardings
        },
        {
            header: "Employee Management",
            subHeader: "Forget about spreadsheets, keep  your employee data in one place.",
            icon: Employees
        },
        {
            header: "Payroll",
            subHeader: "Automate things to pay your staff on time.",
            icon: Payrolls,
        },
        {
            header: "Performance Enablement",
            subHeader: "Modern approach to run performance review for your team.",
            icon: Performances
        },
        {
            header: "Time Tracking",
            subHeader: "Easily clock in-out , track working time, connect with payroll.",
            icon: Times
        },
    ]
}



