import React, { useRef, useState, useMemo } from "react";

const UseRefMemo = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const obj = useMemo(() => {
    return { id: 123 };
  }, [formData]);

  console.log(obj, "rr");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Ref and Memo Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              ref={nameRef}
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              ref={emailRef}
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            color: "white",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefMemo;
