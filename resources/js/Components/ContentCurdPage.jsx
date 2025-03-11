import { useState, useRef, useEffect } from "react";
import MainPage from "@/Components/mainPage";
import AboutUs from "@/Components/AboutUs";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import GroupDivisions from "@/Components/Group&Divisions";
import ContactUs from "@/Components/ContactUs";
import StaffAccess from "@/Components/Staff&Access";
import home from "@/json/home.json";
import DynamicForm from "@/Components/PopUp";
import formSchema from "@/json/formSchema";

export default function HomePage() {
  const [edit, setEdit] = useState(true);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Added modal open state

  const modalRef = useRef();

  let curd_json = {
    page_type:"home",
    page_section:1,
    title:"",
    Description_or_paragraph:"",
    url:"",
    file_type:"img",
    img_or_video:"content",
    id:1,
  }

  const navbar = [
    { name: "HOME", },
    { name: "ABOUT US" },
    { name: "SERVICES" },
    { name: "PROJECTS" },
    { name: "GROUP & DIVISIONS" },
    { name: "CONTACT US" },
    { name: "STAFF ACCESS" }
  ]

  const [activeIndex,setActiveIndex] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

//   if (!isOpen) return null; // Prevents rendering when closed

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

function formRendering(key){
  let format ={
    0:formSchema?.home1
  }

  return format[key]
}

  return (
    <div className="h-[100%]">
      <div className="w-[100%] flex justify-between items-center my-2">
      <div className=" flex justify-start items-center " >
    <ul className=" flex justify-start cursor-pointer items-center space-x-6 bg-blue-400 text-white rounded-lg p-4 " >
      <li
        className={activeIndex === 0 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(0)}
      >
        HOME
      </li>
      <li
        className={activeIndex === 1 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(1)}
      >
        ABOUT US
      </li>
      <li
        className={activeIndex === 2 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(2)}
      >
        SERVICES
      </li>
      <li
        className={activeIndex === 3 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(3)}
      >
        PROJECTS
      </li>
      <li
        className={activeIndex === 4 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(4)}
      >
        GROUP & DIVISIONS
      </li>
      <li
        className={activeIndex === 5 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(5)}
      >
        CONTACT US
      </li>
      <li
        className={activeIndex === 6 ? "border-b-[2px] border-blue-200" : ""}
        onClick={() => setActiveIndex(6)}
      >
        STAFF ACCESS
      </li>
    </ul>
 
      </div>

      <div className="flex justify-center items-center " >
        <button
          className="bg-blue-300 text-black rounded-[24px] text-[12px] w-[80px] h-[35px] mx-2"
          onClick={() => setIsOpen(true)}
        >
          {edit ? "Edit" : "Cancel"}
        </button>
        <button
          className="bg-[#2d2d2d] text-white rounded-[24px] text-[12px] w-[80px] h-[35px]"
          onClick={() => setIsOpen(false)}
        >
          Save
        </button>
      </div>
      </div>

      <div>
        {tabIndex(activeIndex)}
      </div>

      {<DynamicForm formSchema={formRendering(0)} />}

      {/* Modal */}
      {isOpen &&
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 ">
        <div
          ref={modalRef}
          className="w-[600px] h-[90vh] bg-white shadow-lg border border-gray-400 p-[14px] rounded-xl transition-all transform scale-100 opacity-100 relative overflow-x-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-gray-500 hover:text-red-500"
          >
            ✖
          </button>

          {/* Form Fields */}
          <div className="flex flex-col">
            <label>Title</label>
            <input type="text" className="rounded-xl h-[35px] border p-2" />
          </div>

          <label className="mt-2">Description or Paragraph</label>
          <textarea cols={5} className="rounded-xl w-full border p-2" />

          <div className="flex flex-col mt-2">
            <label>URL / Example</label>
            <input type="text" className="rounded-xl h-[35px] border p-2" />
          </div>

          <select className="rounded-lg my-2 w-[100px] h-[45px] border">
            <option value="img">Image</option>
            <option value="video">Video</option>
          </select>

          {/* File Upload Section */}
          <div className="flex justify-center items-center h-[200px] bg-gray-100 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <label
                htmlFor="uploadInput"
                className="cursor-pointer flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-500 mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 16V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10"></path>
                  <rect x="8" y="16" width="8" height="6" rx="1" ry="1"></rect>
                  <line x1="12" y1="12" x2="12" y2="16"></line>
                </svg>
                <span className="text-gray-600 text-sm">Click to Upload Image or Video</span>
              </label>
              <input
                type="file"
                id="uploadInput"
                accept="image/*, video/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Preview Section */}
          {previewUrl && (
            <div className="h-[250px] w-full bg-white flex justify-center items-center overflow-hidden mt-4">
              <div className="m-4 max-w-full max-h-full">
                <p className="text-gray-700 text-sm my-2">Preview:</p>
                {file?.type.startsWith("image") ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="rounded-lg max-w-full max-h-[220px] object-contain"
                  />
                ) : (
                  <video
                    src={previewUrl}
                    controls
                    className="rounded-lg max-w-full max-h-[220px]"
                  />
                )}
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-center items-center my-4">
            <button className="bg-blue-400 rounded-xl w-[80px] h-[35px]">Save</button>
          </div>
        </div>
      </div>}

    </div>
  );
}
