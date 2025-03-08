import { useState } from "react"


export default function AboutUs() {
   let [isEdit,setIsEdit]  = useState();
   return (
      <div >
         <div className=" relative my-[20px] flex justify-center items-center h-[40px] px-[5%] " >
            <h1 className=" text-[30px] text-[#333333] font-semibold  " >ABOUT US</h1>
         <button className="" >Edit</button>
         </div>
         <div class="breadcrumb mb-[40px]">
            <a href="#" className=" font-semibold " >KSK BUILDER</a>
            <span  className=" font-semibold ">SERVICES</span>
         </div>
         <div className=" grid grid-cols-3 h-[240px] gap-10 my-[20px] px-[5%]  " >
            <div className=" text-start " >
               <h1 className="  text-blue-400  text-[14px] " >MANAGING DIRECTOR'S MESSAGE</h1>
               <p className="my-2 text-[#2d2d2d] font-semibold text-[14px] " >MANAGING DIRECTOR'S MESSAGE</p>
               <p className="  text-start text-[14px] " >TONY SALIBA MANAGING DIRECTOR   Our construction operations continue to secure new work throughout the region by aiming those projects on which we have a competitive advantage either through a specific technical proficiency, a well-built …</p>
            </div>

            <div className="   text-start  " >
               <h1 className="  text-blue-400  text-[14px]" >MANAGING DIRECTOR'S MESSAGE</h1>
               <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p>
               <p className="  text-start  text-[14px]" >TONY SALIBA MANAGING DIRECTOR   Our construction operations continue
                  to secure new work throughout the region by aiming those projects on which we have a competitive
                  advantage either through a specific technical proficiency, a well-built …</p>
            </div>

            <div className="   text-start  " >
               <h1 className=" text-blue-400  text-[14px] " >MANAGING DIRECTOR'S MESSAGE</h1>
               <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p>
               <p className="  text-start  text-[14px]" >TONY SALIBA MANAGING DIRECTOR   Our construction operations continue
                  to secure new work throughout the region by aiming those projects on which we have a competitive
                  advantage either through a specific technical proficiency, a well-built …</p>
            </div>

         </div>
      </div>
   )
}