import { useState } from "react";

export default function TopBar({updateTabIndex}) {
  const gradientStyle = {
    background: "rgb(11, 106, 181)",
    width: "100%",
    height: "", // Adjust as needed
  };

  function updateTab(data){
    updateTabIndex(data);
  }
  return (
    <>
      <div className=" px-[5%]" >
        <div className=" flex justify-between items-center " >
        <div className=" pt-[40px] text-[50px] text-[#0693e3] font-semibold  " >
     KSK Builder
     </div>
     <div className=" min-[935px]:hidden " >
      <button className=" bg-[#eeeeee] px-[4px] py-[4px] " >
        Menu <i className="pi pi-bars px-2 " ></i>
      </button>
     </div>
        </div>
        <ul></ul>
        <header className=" max-[935px]:hidden  max-[1350px]:text-[14px] max-[950px]:text-[13.5px]" style={gradientStyle} >
          <ul className=" font-semibold flex justify-center space-x-10 p-[20px] max-[1060px]:px-[16px] text-[#fff]" >
            <li className=" cursor-pointer " onClick={()=>updateTab(0)} >HOME</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(1)}>ABOUT US</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(2)}>SERVICES</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(3)}>PROJECTS</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(4)}>GROUP & DIVISIONS</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(5)}>CONTACT US</li>
            <li className=" cursor-pointer "  onClick={()=>updateTab(6)}>STAFF ACCESS</li>
          </ul>
        </header>
      </div>
    </>
  )

}