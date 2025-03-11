import { useState } from "react";

export default function DynamicForm({ formSchema }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState("img");
  const [todoList, setTodoList] = useState([]);

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
    console.log("Todo List:", JSON.stringify(todoList, null, 2));
    setIsOpen(false);
  };

  // Add a new dynamic todo
  const handleAddTodo = () => {
    const defaultTodo = formSchema.find((field) => field.name === "todoList")?.fields || [];
    setTodoList([...todoList, defaultTodo.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})]);
  };

  // Update a dynamic todo item
  const handleTodoChange = (index, key, value) => {
    const updatedTodos = [...todoList];
    updatedTodos[index][key] = value;
    setTodoList(updatedTodos);
  };

  // Remove a todo item
  const handleRemoveTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Form
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="w-[600px] bg-white shadow-lg h-[90vh] border border-gray-400 p-4 rounded-xl relative overflow-y-scroll">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              ✖
            </button>

            {/* Render Dynamic Fields */}
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
                <div className="w-[100%] border rounded-lg">
                  {fileType === "img" ? (
                    <img src={previewUrl} alt="Preview" className="rounded-lg w-[100%] max-h-[220px] object-contain" />
                  ) : (
                    <video src={previewUrl} controls className="rounded-lg w-[100%] max-h-[220px]" />
                  )}
                </div>
              </div>
            )}

            {/* Dynamic Todo List Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Todo List</h3>
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
                        {field.type === "select" && (
                          <select
                            value={todo[field.name] || ""}
                            onChange={(e) => handleTodoChange(index, field.name, e.target.value)}
                            className="border rounded-lg w-full p-2"
                          >
                            {field.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    ))}
                </div>
              ))}
              <button onClick={handleAddTodo} className="bg-green-500 text-white px-4 py-2 rounded mt-3">
                + Add Todo
              </button>
            </div>

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
