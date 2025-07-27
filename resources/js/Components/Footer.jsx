import client_img from "../../img/Screenshot 2025-03-08 175703.png";
import DynamicForm from "./PopUp";
import { useEffect, useState } from "react";
import formSchema from "@/json/formSchema";

export default function Footer() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [sectionId, setSectionId] = useState();
  const [contentDetails, setContentDetails] = useState([]);
  const [contentSectionTarget, setContentSectionTarget] = useState(0);
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  function routeUrl() {
    if (window.location.pathname === "/" && window.location.href != undefined) {
      return false
    }
    else {
      return true
    }
  }

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

  // 

  function formRendering(key) {
    let format = {
      0: formSchema?.HomePage1,
      1: formSchema?.HomePage2,
      2: formSchema?.HomePage3,
      3: formSchema?.HomePage4,
      4: formSchema?.HomePage5,
      5: formSchema?.HomePage6,
      6: formSchema?.HomePage7,
    }

    return format[key]
  }
async function CreateOrUpdate(formData, sectionId) {
  try {
    console.log(formData, formData?.imageType, 'sectionId');

    const imageIndex = parseInt(formData?.imageType || "1", 10);
    const selectedContent = contentDetails?.[0]?.section_content?.[imageIndex];

    // Fallbacks to ensure section_id and id are never undefined
    const resolvedId = selectedContent?.id ?? sectionId ?? formData?.id ?? null;
    const resolvedSectionId = selectedContent?.section_id ?? sectionId ?? null;

    if (!resolvedSectionId) {
      console.warn("Missing section_id. Aborting the request.");
      return;
    }

    let format = {
      id: imageIndex ==1 ? 43:  imageIndex ==2 ? 44 : 47  ,
      ...formData,
      image1_path: "",
      image1_name: "",
      image2_path: "",
      image2_name: "",
      image3_path: "",
      image3_name: "",
      image4_path: "",
      image4_name: "",
      image5_path: "",
      image5_name: "",
      image6_path: "",
      image6_name: "",
    };

    console.log(format, 'format ---');

    const response = await fetch(`${API_BASE_URL}/update-content`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
      },
      body: JSON.stringify(format),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    fetchContentDetails(1);
  } catch (error) {
    console.error("Error creating or updating content:", error);
  }
}


  function findObject(targetName) {
    console.log(contentDetails, targetName, 'targetName ---')
    return contentDetails.find(section => section.section_name.toLowerCase().trim() === targetName.toLowerCase().trim());
  }



  function SaveForm(data) {
    console.log(data, 'data :::');
    const actions = {
      '7 section': CreateOrUpdate,
    }
    // sdsd

    actions[contentSectionTarget]?.(data, sectionId);
  }

  useEffect(() => {
    fetchContentDetails(1);
  }, []);
  useEffect(() => {
    console.log("Effect called");
  }, []);
  return (
    <div>
      {JSON.stringify(sectionId)}
      {routeUrl() &&
        <div className=" flex justify-start items-center " onClick={() => {
          setContentSectionTarget('7 section'); // consistent key
          const id = findObject('7 section')?.id;
          console.log(id, 'id ----')
          setSectionId(id);
        }}>
          <h1 className=" text-[24px] font-semibold my-2 "  >7 Section</h1>
          {/* {sectionId} */}
          {<DynamicForm formSchema={formRendering(6)} onSubmit={SaveForm} />}
          <div>

          </div>
        </div>}
      <div className=" grid grid-cols-4 gap-10 bg-[#282828] py-[60px] text-[#fff] " >
        <div className=" flex justify-center items-start " >
          <img src={client_img} alt="" className=" h-[60px] w-[80%] " />
        </div>
        <div className=" text-start !text-[14px] text-[#666666] " >
          <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >{contentDetails?.[6]?.section_content?.[0]?.title}</h1>
          {contentDetails?.[6]?.section_content?.[0]?.content ? contentDetails?.[6]?.section_content?.[0]?.content : <> Phone : +971 2 6273344 <br />
            Fax no. : +971 2 6271165 <br />
            Location : 6th Floor, Unit 601, Nael & Bin  <br /> Harmal (NBH) Tower, Zayed The First St. <br /> Al Khalidiyah, Abu Dhabi UA
            PO Box : 28102 </>}</div>
        <div className="text-start text-[14px] text-[#666666]   " >
          <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >{contentDetails?.[6]?.section_content?.[1]?.title}</h1>
          {contentDetails?.[6]?.section_content?.[1]?.content ? contentDetails?.[6]?.section_content?.[1]?.content : <> Phone : +971 2 6273344 <br />
            Fax no. : +971 2 6271165 <br />
            Location : 6th Floor, Unit 601, Nael & Bin  <br /> Harmal (NBH) Tower, Zayed The First St. <br /> Al Khalidiyah, Abu Dhabi UA
            PO Box : 28102 </>}
        </div>
        <div className="text-start text-[14px] text-[#666666]  " >
          <h1 className="text-[#fff]  text-[14px] my-2  font-semibold" >{contentDetails?.[6]?.section_content?.[2]?.title}</h1>
          <p className=" my-2 text-[#fff] " > {contentDetails?.[6]?.section_content?.[2]?.content ? contentDetails?.[6]?.section_content?.[2]?.content : <> Phone : +971 2 6273344 <br />
            Fax no. : +971 2 6271165 <br />
            Fax no. : +971 2 6271165
          </>}</p>
        </div>
      </div>
      <div className=" bg-blue-400 flex justify-between items-center w-[100%] p-2 px-[5%] text-[#fff] " >
        <h1>Construction | Engineering | Management Solution </h1>
        <p> C KSK Builder. All rights reserved.</p>
      </div>
    </div>
  )
}