import Footer from "@/Components/Footer"
import { useEffect, useState } from "react";
import DynamicForm from "./PopUp";
import formSchema from "@/json/formSchema";

export default function AboutUs() {
   const [sectionId, setSectionId] = useState();
   const [contentDetails, setContentDetails] = useState([]);
   const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

   const fetchContentDetails = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/get-content");
        const data = await response.json();
        console.log(data, 'data ::')
        setContentDetails(data);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    useEffect(()=>{
      fetchContentDetails();
    },[])

    function formRendering(key) {
      console.log(key)
      let format = {
         0:formSchema?.About
      }
      return format[key]
    }

   function SaveForm(data) {
    const actions = {
      0:saveSection
    }
    actions[sectionId]?.(data, sectionId);
  }

  async function saveSection(data, sectionId) {
   console.log(sectionId, 'sectionId ::')

   let format = {
     1: { image1_path: "", image1_name: "" },
     2: { image2_path: "", image2_name: "" },
     3: { image3_path: "", image3_name: "" },
     4: { image4_path: "", image4_name: "" },
     5: { image5_path: "", image5_name: "" },
     6: { image6_path: "", image6_name: "" },
     7: { image7_path: "", image7_name: "" },
     8: { image8_path: "", image8_name: "" },
     9: { image9_path: "", image9_name: "" },
     10: { image10_path: "", image10_name: "" },
   };

   // Ensure data.imageType exists before updating format
   console.log(data?.imageType);
   if (data?.imageType || 1) {
     const keyPath = `image${data?.imageType || 1}_path`; // Dynamically create the key
     const keyPathName = `image${data?.imageType || 1}_name`; // Dynamically create the key
     format[data?.imageType || 1][keyPath] = data?.file || "";
     format[data?.imageType || 1][keyPathName] = data?.sub_title || ""; // Store title
   }

   // console.log(format, 'format ::');

   const formData = new FormData();
   // Always append `id`
   formData.append("id", sectionId);
   formData.append("title", data?.title);
   // Append each field individually
   formData.append("image1_path", format[data?.imageType || 1].image1_path || "");
   formData.append("image1_name", format[data?.imageType || 1].image1_name || "");
   formData.append("image2_path", format[data?.imageType || 1].image2_path || "");
   formData.append("image2_name", format[data?.imageType || 1].image2_name || "");
   formData.append("image3_path", format[data?.imageType || 1].image3_path || "");
   formData.append("image3_name", format[data?.imageType || 1].image3_name || "");
   formData.append("image4_path", format[data?.imageType || 1].image4_path || "");
   formData.append("image4_name", format[data?.imageType || 1].image4_name || "");
   formData.append("image5_path", format[data?.imageType || 1].image5_path || "");
   formData.append("image5_name", format[data?.imageType || 1].image5_name || "");
   formData.append("image6_path", format[data?.imageType || 1].image6_path || "");
   formData.append("image6_name", format[data?.imageType || 1].image6_name || "");

   // console.log(formData, 'formData ::');

   try {
     const response = await fetch("http://127.0.0.1:8000/update-content", {
       method: "POST",
       headers: {
         "X-CSRF-TOKEN": csrfToken, // Ensure csrfToken is defined
       },
       body: formData,
     });

     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }

     const res = await response.json();
     fetchContentDetails();
     // console.log(res, "payload ::");
   } catch (error) {
     console.error("Error in SaveSection2:", error);
   }
   fetchContentDetails();
 }

   return (
      <div >
         <div className=" relative my-[20px] flex justify-center items-center h-[40px] px-[5%] " >
            <h1 className=" text-[30px] text-[#333333] font-semibold  " >ABOUT US</h1>
         {/* <button className="" >Edit</button> */}
         </div>
         <div className="breadcrumb mb-[40px]">
            <a href="#" className=" font-semibold " >KSK BUILDER</a>
            <span  className=" font-semibold ">ABOUT US</span>
         </div>
            {<DynamicForm formSchema={formRendering(0)} onSubmit={SaveForm} />}
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
         <Footer/>
      </div>
   )
}