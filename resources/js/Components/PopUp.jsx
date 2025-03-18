import { useState } from "react";

export default function DynamicForm({ formSchema,onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState("img");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "type") {
      setFileType(value);
      setTodoList([]); // Reset todo list when type changes
    }
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
  onSubmit(formData);
  console.log("Form Data:", formData);
  console.log("File Object:", formData.file);
  setIsOpen(false)
  // alert(`File Name: ${formData.file.name}`);
}

  const handleAddTodo = () => {
    const defaultTodo = formSchema.find((field) => field.name === "todoList")?.fields || [];
    setTodoList([...todoList, defaultTodo.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})]);
  };
const handleTodoChange = (index, fieldName, value) => {
  const updatedTodos = [...todoList];

  if (fieldName === "attachment" && value.target.files.length > 0) {
    updatedTodos[index][fieldName] = value.target.files[0]; // Store File object
  } else {
    updatedTodos[index][fieldName] = value;
  }

  setTodoList(updatedTodos);
};

  const handleRemoveTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

//  

  return (
    <div className="p-6">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Or Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="w-[600px] bg-white shadow-lg h-[90vh] border border-gray-400 p-4 rounded-xl relative overflow-y-scroll">
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              ✖
            </button>

            {formSchema?.map((field, index) => (
              <div key={index} className="mt-3">
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
                    rows={10}
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

            {previewUrl && (
              <div className="mt-4 text-center">
                <p className="text-gray-700 text-sm">Preview:</p>
                <div className="w-[100%] border rounded-lg">
                  {fileType === "img" ? (
                    <img src={previewUrl} alt="Preview" className="rounded-lg w-[100%] max-h-[220px] object-contain" />
                  ) : (
                    <video src={previewUrl} controls className="rounded-lg w-[100%] max-h-[220px]" />
                  )}
                </div>
              </div>
            )}

            {/* Show Todo List only when type is Image or Video */}
            {(fileType === "img" || fileType === "video") && (
              
              <div className="mt-6">
                  {todoList.length >0 &&
                <h3 className="text-lg font-semibold">Todo List</h3>}
                {todoList.map((todo, index) => (
                  <div key={index} className="mt-3 border p-3 rounded-lg relative">
                    <button
                      onClick={() => handleRemoveTodo(index)}
                      className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-lg"
                    >
                      ✖
                    </button>
                    {formSchema
                      .find((field) => field.name === "todoList")
                      ?.fields.map((field) => (
                        <div key={field.name} className="mt-2">
                          <label className="block mb-1">{field.label}</label>
                          {field.type === "text" && (
                            <input
                              type="text"
                              placeholder={field.placeholder}
                              value={todo[field.name]}
                              onChange={(e) => handleTodoChange(index, field.name, e.target.value)}
                              className="border rounded-lg w-full p-2"
                            />
                          )}
                          {field.type === "textarea" && (
                            <textarea
                              placeholder={field.placeholder}
                              value={todo[field.name]}
                              onChange={(e) => handleTodoChange(index, field.name, e.target.value)}
                              className="border rounded-lg w-full p-2"
                            ></textarea>
                          )}
                          {field.type === "file" && (
                            <input
                              type="file"
                              accept={field.accept || "image/*,video/*"} // Allow both image and video uploads
                              onChange={(e) =>
                                handleTodoChange(index, field.name, e.target.files[0])
                              }
                              className="border rounded-lg w-full p-2"
                            />
                          )}
                        </div>
                      ))}

                  </div>
                ))}
                {todoList.length >0 &&
                <button onClick={handleAddTodo} className="bg-green-500 text-white px-4 py-2 rounded mt-3">
                  + Add Todo
                </button>}
              </div>
            )}

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
