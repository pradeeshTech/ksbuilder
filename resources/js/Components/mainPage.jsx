import Footer from "@/Components/Footer";
import client_img from "../../img/Screenshot 2025-03-08 175703.png";
import { useEffect, useState } from "react";
import DynamicForm from "./PopUp";
import formSchema from "@/json/formSchema";

export default function MainPage({ Section1, Section2, Section3, Section4, Section5 }) {

  const [sectionId, setSectionId] = useState();
  const [contentDetails, setContentDetails] = useState([]);
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  const fetchContentDetails = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/get-content");
      const data = await response.json();
      console.log(data, 'data ::')
      setContentDetails(data);
      // setWifiName(data || "Not connected");
    } catch (error) {
      // setWifiName("Failed to fetch WiFi name.");
      console.error("Error fetching WiFi SSID:", error);
    }
  };

  useEffect(() => {
    fetchContentDetails();
  }, []);
  const TextComponent = (data) => {
    return <div dangerouslySetInnerHTML={{ __html: data?.replace(/\n/g, "<br />") }} />;
  };

  function formRendering(key) {
    let format = {
      0: formSchema?.HomePage1,
      1: formSchema?.HomePage2,
      2: formSchema?.HomePage3,
      3: formSchema?.HomePage4,
      4: formSchema?.HomePage5,
    }

    return format[key]
  }

  async function CreateOrUpdate(formData, sectionId) {
    try {
      console.log(formData, 'sectionId')

      let format = {
        id: sectionId,
        section_id: sectionId, // Ensure this is defined
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

      const response = await fetch("http://127.0.0.1:8000/update-content", {
        method: "POST", // Ensure it's POST
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken  // Attach CSRF token in headers    
        },
        body: JSON.stringify(format),
      });
      // 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // 
      const data = await response.json();
      fetchContentDetails();
      // console.log(format, "Create Or Update ::");
    } catch (error) {
      console.error("Error creating or updating content:", error);
    }
  }

  // Function to get CSRF token from cookies
  function getCSRFToken() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1];
    return cookieValue || "";
  }

  function SaveForm(data) {
    console.log(data, 'data :::');
    const actions = {
      1: CreateOrUpdate,
      2: SaveSection2,
      3: saveSection3,
      4: saveSection4,
      5: saveSection4,
    }
    //     // "testing"
    // sdsd


    actions[sectionId]?.(data, sectionId);
  }

  async function SaveSection2(data, sectionId) {
    console.log(data, 'data :::')
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
    if (data?.imageType || 1) {
      const keyPath = `image${data?.imageType || 1}_path`; // Dynamically create the key
      const keyPathName = `image${data?.imageType || 1}_name`; // Dynamically create the key

      format[data?.imageType || 1][keyPath] = data?.file || "";
      format[data?.imageType || 1][keyPathName] = data?.title || ""; // Store title
    }

    console.log(format);

    // Select the correct section format
    // let format1 = format[+data.imageType] || {};
    // console.log(data.imageType)

    // Build a FormData instance
    const formData = new FormData();

    // Always append `id`
    formData.append("id", sectionId);

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
  }

  async function saveSection3(data, sectionId) {

    console.log(sectionId, 'data :: ');
    const formData = new FormData();

    formData.append("id", sectionId);
    // Append each field individually.
    formData.append("title", data?.title);

    formData.append("content", data?.content);

    formData.append("image1_path", data?.file);

    // console.log(formData,'formData :: ');
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

      // console.log(res, "payload ::");
    } catch (error) {
      console.error("Error in SaveSection2:", error);
    }

    fetchContentDetails();

  }

  async function saveSection4(data, sectionId) {

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

    console.log(format, 'format ::');

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

    console.log(formData, 'formData ::');

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
    <div>
      <div className=" px-[5%]" >
        {/*  */}

        {/* 1 section */}

        <div className=" flex justify-start items-center " onClick={() => { setSectionId(1) }}>
          <h1 className=" text-[24px] font-semibold my-2 "  >1 Section</h1>
          {sectionId}
          {<DynamicForm formSchema={formRendering(0)} onSubmit={SaveForm} />}
          <div>

          </div>
        </div>
        <div>
          <h1 className=" my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >
            {contentDetails?.[0]?.section_content?.[0]?.title || ''}</h1>
          <p className=" text-start my-2 text-[14px] text-[#636363]  ">{TextComponent(contentDetails[0] ? contentDetails?.[0].section_content?.[0]?.content : '')}</p>
          {/* {Section1?.Description.map((item, index) => ( */}
          {/* <p className=" text-start my-2 text-[14px] text-[#636363]  " key={index} >{item}</p> */}
          {/* ))} */}
        </div>

        {/* 2 section */}

        <div className="mt-[80px]" >
          <div className=" flex justify-start items-center" onClick={() => { setSectionId(2) }}  >
            <h1 className="text-[24px] font-semibold ">2 Section</h1>
            {<DynamicForm formSchema={formRendering(1)} onSubmit={SaveForm} />}
          </div>

          <div className="" >
            {contentDetails?.[1]?.section_content?.[0]?.image1_name &&
              <div className="" >
                <h1 className="  my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{contentDetails[1].section_content?.[0].image1_name || ''}</h1>
                <div className="shadow-lg rounded-lg h-[400px] text-gray-400 " >
                  <img src={contentDetails[1].section_content[0].image1_path} className="object-cover w-[100%] h-[100%]" alt="" />
                </div>
              </div>
            }

            {contentDetails?.[1]?.section_content?.[0]?.image2_name &&
              <div className="" >
                <h1 className="  my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{contentDetails[1].section_content[0].image2_name || ''}</h1>
                <div className="shadow-lg rounded-lg h-[400px] text-gray-400 " >
                  <img src={contentDetails[1].section_content?.[0].image2_path} className="object-cover w-[100%] h-[100%]" alt="" />
                </div>
              </div>
            }

            {contentDetails?.[1]?.section_content?.[0]?.image3_name &&
              <div className="" >
                <h1 className="  my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{contentDetails[1].section_content[0].image3_name || ''}</h1>
                <div className="shadow-lg rounded-lg h-[400px] text-gray-400 " >
                  <img src={contentDetails[1].section_content[0].image3_path} className="object-cover w-[100%] h-[100%]" alt="" />
                </div>
              </div>}

            {contentDetails?.[1]?.section_content?.[0]?.image4_name &&
              <div className="" >
                <h1 className="  my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{contentDetails[1].section_content[0].image4_name || ''}</h1>
                <div className="shadow-lg rounded-lg h-[400px] text-gray-400 " >
                  <img src={contentDetails[1].section_content[0].image4_path} className="object-cover w-[100%] h-[100%]" alt="" />
                </div>
              </div>}

            {contentDetails?.[1]?.section_content?.[0]?.image5_name &&
              <div className="" >
                <h1 className="  my-4 font-bold border-b-[1px] border-gray-300 pb-2 text-[#333333]  " >{contentDetails[1].section_content[0].image5_name || ''}</h1>
                <div className="shadow-lg rounded-lg h-[400px] text-gray-400 " >
                  <img src={contentDetails[1].section_content[0].image5_path} className="object-cover w-[100%] h-[100%]" alt="" />
                </div>
              </div>}


            {/*  */}
          </div>
        </div>

        {/* 3 section */}
        {/* {JSON.stringify(contentDetails?.[2].section_content[0]?.title)} */}

        <div className="mt-[80px]" >
          <div className=" flex justify-start items-center" onClick={() => { setSectionId(3) }} >
            <h1 className="text-[24px] font-semibold ">3 Section</h1>
            {<DynamicForm formSchema={formRendering(2)} onSubmit={SaveForm} />}
          </div>
          <div className=" grid grid-cols-2 gap-5 " >
            <div className=" border-[1px] border-gray-200 shadow-lg h-[281px] " >
              <img src={contentDetails?.[2]?.section_content?.[0]?.image1_path} className=" object-cover w-[100%] h-[100%] " alt="" />
            </div>
            <div className=" flex flex-col items-center " >
              <h1 className=" my-2 font-semibold text-start py-2 border-b border-gray-400 w-[100%] " >{contentDetails?.[2]?.section_content[0]?.title}</h1>
              <div className=" my-2 flex justify-start items-start flex-col w-[100%] " >
                <p className=" text-[14px] " >{TextComponent(contentDetails?.[2]?.section_content[0]?.content)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 section */}

        <div className=" mt-[80px] " >
          <div className=" flex justify-start items-center" onClick={() => { setSectionId(4) }} >
            <h1 className="text-[24px] font-semibold ">{contentDetails?.[3]?.section_content?.[0]?.title || 'FEATURED PROJECTS'} </h1>
            {<DynamicForm formSchema={formRendering(3)} onSubmit={SaveForm} />}
          </div>
          <div className=" grid grid-cols-3 w-[100%] gap-4" >

            {contentDetails?.[3]?.section_content?.[0]?.image1_path &&
              <div className=" flex flex-col justify-center items-center " >
                <div className="bg-gray-50  border shadow-md rounded-md h-[240px]  w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image1_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image1_name}</span>
              </div>
            }
            {contentDetails?.[3]?.section_content?.[0]?.image2_path &&

              <div className=" flex flex-col justify-center items-center  " >
                <div className="bg-gray-50  border shadow-md rounded-md h-[240px]  w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image2_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image2_name}</span>
              </div>
            }
            {contentDetails?.[3]?.section_content?.[0]?.image3_path &&
              <div className=" flex flex-col justify-center items-center " >
                <div className="bg-gray-50  border shadow-md rounded-md h-[240px]  w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image3_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image3_name}</span>
              </div>
            }
            {contentDetails?.[3]?.section_content?.[0]?.image4_path &&
              <div className=" flex flex-col justify-center items-center " >
                <div className="bg-gray-50  border shadow-md rounded-md h-[240px]  w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image4_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image4_name}</span>
              </div>
            }
            {contentDetails?.[3]?.section_content?.[0]?.image5_path &&
              <div className=" flex flex-col justify-center items-center " >
                <div className="bg-gray-50  border shadow-md rounded-md  h-[240px] w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image5_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image5_name}</span>
              </div>
            }
            {contentDetails?.[3]?.section_content?.[0]?.image6_path &&
              <div className=" flex flex-col justify-center items-center  " >
                <div className="bg-gray-50  border shadow-md rounded-md  h-[240px] w-[100%] " >
                  <img src={contentDetails?.[3]?.section_content?.[0]?.image6_path} className=" object-cover w-[100%] h-[100%] " alt="" />
                </div>
                <span className="my-2 " >{contentDetails?.[3]?.section_content?.[0]?.image6_name}</span>
              </div>
            }


          </div>
        </div>

        {/* 5 section */}

        <div className="my-[100px] border border-[#000] " >
          <h1> </h1>
          <div className=" flex justify-start items-center" onClick={() => { setSectionId(5) }}  >
            <h1 className="text-[24px] font-semibold ">5 section</h1>
            {<DynamicForm formSchema={formRendering(4)} onSubmit={SaveForm} />}
          </div>
          <h1 className=" my-2  text-[24px]  " >CLIENTS</h1>

          <div className=" grid grid-cols-5 gap-5 my-4 border-gray-300 border-y-[1px] py-10 " >
            <div className=" border shadow-sm rounded-md h-[100px] text-start" >
              <img src={contentDetails?.[4]?.section_content?.[0]?.image1_path} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]   " >
              <img src={contentDetails?.[4]?.section_content?.[0]?.image25_path} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={contentDetails?.[4]?.section_content?.[0]?.image3_path} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={contentDetails?.[4]?.section_content?.[0]?.image4_path} alt="" className="w-[100%] h-[100%]  " />
            </div>
            <div className=" border shadow-sm rounded-md  h-[100px]  " >
              <img src={contentDetails?.[4]?.section_content?.[0]?.image5_path} alt="" className="w-[100%] h-[100%]  " />
            </div>
          </div>
        </div>

      </div>

      <div className=" bg-[#000] p-4 text-[#fff] " >

        <div className=" flex justify-start items-center" >
          <h1 className="text-[24px] font-semibold "> 6  section</h1>
          {<DynamicForm formSchema={formRendering(5)} />}
        </div>
        <h1 className=" my-2 " >Insta</h1>
        <div className=" grid grid-cols-3  h-[240px] gap-4 " >
          <div className=" bg-[#fff] rounded-lg  " >
          </div>
          <div className=" bg-[#fff] rounded-lg" >
          </div>
          <div className=" bg-[#fff] rounded-lg" >
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}