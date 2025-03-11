import { Head, Link } from '@inertiajs/react';
import TopBar from '@/Components/Topbar';
import { useState } from 'react';

import MainPage from "@/Components/mainPage";
import AboutUs from "@/Components/AboutUs";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import GroupDivisions from "@/Components/Group&Divisions";
import ContactUs from "@/Components/ContactUs";
import StaffAccess from "@/Components/Staff&Access";
import home from "@/json/home.json";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // const handleImageError = () => {
        // document
            // .getElementById('screenshot-container')
            // ?.classList.add('!hidden');
        // document.getElementById('docs-card')?.classList.add('!row-span-1');
        // document
            // .getElementById('docs-card-content')
            // ?.classList.add('!flex-row');
        // document.getElementById('background')?.classList.add('!hidden');
    // };

    let [activeTab,setActiveTab] = useState(1); 
    
function tabIndex(data){
    let format = {
      0:<MainPage  Section1={home?.firstSection1} Section2={home?.secondSection} />,
      1: <AboutUs />,
      2:<Services/>,
      3:<Projects/>,
      4:<GroupDivisions/>,
      5:<ContactUs/>,
      6:<StaffAccess/>,
    }
   return format[data]
  }
  
    // TopBar
    
    return (
        <>
            <div className=' overflow-y-auto  ' >
                <button className='  ' >Edit</button>
                <div className=' mx-[10%] h-[100%] min-h-[100vh] my-0 ' style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.33)" }} >
                    <TopBar updateTabIndex={setActiveTab} />
                    <div className=' ' >
                        {tabIndex(activeTab)}
                    </div>
                </div>
            </div>
        </>
    );
}
