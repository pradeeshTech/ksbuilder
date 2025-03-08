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
        <div className=" py-4 text-[40px] text-[#0693e3] " >
        KSK Builder
        </div>
        <header className="navigation " style={gradientStyle} >
          <ul className=" font-semibold flex justify-center space-x-10 p-[30px] text-[#fff]" >
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