import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";
import DynamicForm from "./PopUp";
import formSchema from "@/json/formSchema";

export default function StaffAccess() {
  const [sectionId, setSectionId] = useState();
  const [contentDetails, setContentDetails] = useState([]);
  const [contentSectionTarget, setContentSectionTarget] = useState(0);
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchContentDetails = async (pageId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/get-content/${pageId}`, {
        method: "GET",  // Ensure GET is used
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data, "data ::");
      setContentDetails(data);
    } catch (error) {
      console.error("Error fetching", error);
    }
  }
  useEffect(() => {
    fetchContentDetails(7);
  }, [])
  function formRendering(key) {
    // console.log(key)
    let format = {
      0: formSchema?.About
    }
    return format[key]
  }

  function rendingData(data) {
    let format = {
      1: "1 StaffAccess",
      2: "2 StaffAccess",
      3: "3 StaffAccess",
      4: "4 StaffAccess",
      5: "5 StaffAccess",
      6: "6 StaffAccess"
    }
    return format[data];
  }

  function SaveForm(data) {
    console.log(data, 'data ::')
    const actions = {
      '1 StaffAccess': saveSection
    }
    actions[contentSectionTarget]?.(data, findObject(rendingData(data?.imageType || 1))?.section_content?.[0]?.id);
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
    const formData = new FormData();
    // Always append `id`
    formData.append("id", sectionId);
    formData.append("title", data?.title);
    formData.append("content", data?.content);
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
      const response = await fetch(`${API_BASE_URL}/update-content`, {
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
      fetchContentDetails(7);
      // console.log(res, "payload ::");
    } catch (error) {
      console.error("Error in SaveSection2:", error);
    }
    fetchContentDetails(7);
  }

  function findObject(targetName) {
    return contentDetails.find(section => section.section_name.toLowerCase().trim() === targetName.toLowerCase().trim());
  }
  
  function routeUrl(){
    if(window.location.pathname === "/" && window.location.href != undefined){
     return false
    }
    else{
      return true
    }
  }
  return (
    <div >
      <div className=" relative my-[20px] flex justify-center items-center h-[40px] px-[5%] " >
        <h1 className=" text-[30px] text-[#333333] font-semibold  " >Staff Access</h1>
        {/* <button className="" >Edit</button> */}
      </div>
      <div className="breadcrumb mb-[40px]" onClick={() => { setContentSectionTarget('1 StaffAccess'), setSectionId(findObject('1 StaffAccess')?.section_content?.[0]?.id) }}>
        <a href="#" className=" font-semibold " >KSK BUILDER</a>
        <span className=" font-semibold " onClick={() => { }} >Staff Access</span>
        {routeUrl() && <DynamicForm formSchema={formRendering(0)} onSubmit={SaveForm} />}
      </div>
      <div className=" grid grid-cols-3  gap-10 my-[20px] px-[5%]" >
        {contentDetails[0]?.section_content[0]?.content &&
          <div className=" text-start " >
            <img src={contentDetails[0]?.section_content[0]?.image1_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
            <h1 className="  text-blue-400  text-[14px] mt-[25px] mb-[15px] font-bold " >{contentDetails[0]?.section_content[0]?.title}</h1>
            {/* <p className="my-2 text-[#2d2d2d] font-semibold text-[14px] " >{}</p> */}
            <p className="  text-start text-[14px] " >{contentDetails[0]?.section_content[0]?.content}</p>
          </div>
        }

        <div className="   text-start  " >
          <img src={contentDetails[1]?.section_content[0]?.image2_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
          <h1 className="  text-blue-400  text-[14px]  mt-[25px] mb-[15px] font-bold  " >{contentDetails[1]?.section_content[0]?.title}</h1>
          {/* <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p> */}
          <p className="  text-start text-[14px] " >{contentDetails[1]?.section_content[0]?.content}</p>
        </div>

        <div className="   text-start  " >
          <img src={contentDetails[2]?.section_content[0]?.image3_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
          <h1 className="  text-blue-400  text-[14px]  mt-[25px] mb-[15px]  font-bold " >{contentDetails[2]?.section_content[0]?.title}</h1>
          {/* <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p> */}
          <p className="  text-start text-[14px] " >{contentDetails[2]?.section_content[0]?.content}</p>
        </div>
        <div className="   text-start  " >
          <img src={contentDetails[3]?.section_content[0]?.image4_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
          <h1 className="  text-blue-400  text-[14px]  mt-[25px] mb-[15px]  font-bold " >{contentDetails[3]?.section_content[0]?.title}</h1>
          {/* <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p> */}
          <p className="  text-start text-[14px] " >{contentDetails[3]?.section_content[0]?.content}</p>
        </div>
        <div className="   text-start  " >
          <img src={contentDetails[4]?.section_content[0]?.image5_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
          <h1 className="  text-blue-400  text-[14px]  mt-[25px] mb-[15px]  font-bold " >{contentDetails[4]?.section_content[0]?.title}</h1>
          {/* <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p> */}
          <p className="  text-start text-[14px] " >{contentDetails[4]?.section_content[0]?.content}</p>
        </div>
        <div className="   text-start  " >
          <img src={contentDetails[5]?.section_content[0]?.image6_path} alt="" className=" h-[202px] w-[100%] rounded-md " />
          <h1 className="  text-blue-400  text-[14px]  mt-[25px] mb-[15px]  font-bold " >{contentDetails[5]?.section_content[0]?.title}</h1>
          {/* <p className=" text-[#2d2d2d] font-semibold text-[14px]  my-2" >MANAGING DIRECTOR'S MESSAGE</p> */}
          <p className="  text-start text-[14px] " >{contentDetails[5]?.section_content[0]?.content}</p>
        </div>
      </div>
      <Footer />
    </div>

  )
}