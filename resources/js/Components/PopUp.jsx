import { useState } from "react";
// 
// const formSchema = [
//   { name: "title", type: "text", label: "Title", placeholder: "Enter title" },
//   { name: "description", type: "textarea", label: "Description", placeholder: "Enter description" },
//   { name: "url", type: "text", label: "URL / Example", placeholder: "Enter URL" },
//   {
//     name: "type",
//     type: "select",
//     label: "Select Type",
//     options: [
      // { value: "img", label: "Image" },
      // { value: "video", label: "Video" },
//     ],
//   },
//   { name: "file", type: "file", label: "Upload Image/Video" },
// ];
// 
export default function DynamicForm({formSchema}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState("img");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "type") setFileType(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData({ ...formData, file });
      setPreviewUrl(previewUrl);
    }
  };

  const handleSave = () => {
    console.log("Form Data:", JSON.stringify(formData, null, 2));
    setIsOpen(false);
  };

  return (
    <div className="p-6">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Form
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="w-[600px] bg-white shadow-lg  h-[90vh] border border-gray-400 p-4 rounded-xl relative overflow-y-scroll">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              ✖
            </button>

            {/* Render Dynamic Fields */}
            { formSchema?.map((field) => (
              <div key={field.name} className="mt-3">
                <label className="block mb-1">{field.label}</label>
                
                {field.type === "text" && (
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="border rounded-lg w-full p-2"
                  />
                )}

                {field.type === "textarea" && (
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="border rounded-lg w-full p-2"
                  ></textarea>
                )}

                {field.type === "select" && (
                  <select
                    name={field.name}
                    value={formData[field.name] || "img"}
                    onChange={handleChange}
                    className="border rounded-lg w-full p-2"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {field.type === "file" && (
                  <div className="border-dashed border-2 border-gray-400 p-4 rounded-lg text-center mt-2">
                    <label className="cursor-pointer">
                      <span className="text-gray-600">Click to Upload {fileType === "img" ? "Image" : "Video"}</span>
                      <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileChange} />
                    </label>
                  </div>
                )}
              </div>
            ))}

            {/* Preview Section */}
            {previewUrl && (
              <div className="mt-4 text-center">
                <p className="text-gray-700 text-sm">Preview:</p>
                {previewUrl &&
                <div className="w-[100%] border rounded-lg " >
                {fileType === "img" ? (
                  <img src={previewUrl} alt="Preview" className="rounded-lg w-[100%] max-h-[220px] object-contain" />
                ) : (
                  <video src={previewUrl} controls className="rounded-lg w-[100%] max-h-[220px]" />
                )}
                   </div>
                   }
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-center items-center my-4">
              <button onClick={handleSave} className="bg-blue-400 rounded-xl w-[80px] h-[35px] text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
