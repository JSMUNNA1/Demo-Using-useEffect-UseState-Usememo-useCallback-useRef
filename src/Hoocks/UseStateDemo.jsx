import React, { useState, useEffect, useCallback } from "react";

//its component makes using the useState ,useEffect,use Callback
export default function UseStateDemo() {
  const [fields, setFields] = useState([
    {
      id: 1,
      label: "Name",
      value: "",
      type: "text",

      isValid: false,
    },
  ]);

  const addField = useCallback(() => {
    setFields((prevFields) => [
      ...prevFields,
      {
        id: Date.now(),
        label: `Field ${prevFields.length + 1}`,
        value: "",
        type: "text",
        error: "",
        isValid: false,
      },
    ]);
  }, []);

  const removeField = useCallback((id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  }, []);

  const updateField = useCallback((id, newValue) => {
    setFields((prevFields) =>
      prevFields.map((field) => {
        if (field.id === id) {
          return {
            ...field,
            value: newValue,
          };
        }
        return field;
      })
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Draft saved:", fields);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fields]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted successfully!");
    console.log("Submitted Data:", fields);
  };

  return (
    <div>
      <h1> Form </h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: "20px" }}>
            <label>
              {field.label}:
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => updateField(field.id, e.target.value)}
              />
            </label>
            <button
              type="button"
              onClick={() => removeField(field.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
            {field.error && <p style={{ color: "red" }}>{field.error}</p>}
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button
          type="submit"
          style={{
            marginLeft: "10px",

            color: "white",
          }}
        >
          Submit
        </button>
      </form>
      <p>{fields.length} fields are valid.</p>
    </div>
  );
}
