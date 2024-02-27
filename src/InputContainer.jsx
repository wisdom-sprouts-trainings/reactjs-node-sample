import React, { useState } from "react";

export const InputContainer = () => {
  const [student, setStudent] = useState({ name: "", email: "", mobile: 0 });

  function setNameHandler(e) {
    setStudent((previousStudent) => {
      return { ...previousStudent, name: e.target.value };
    });
  }
  function setEmailHandler(e) {
    setStudent((previousStudent) => {
      return { ...previousStudent, email: e.target.value };
    });
  }
  function setMobileHandler(e) {
    setStudent((previousStudent) => {
      return { ...previousStudent, mobile: e.target.value };
    });
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter name"
          value={student.name}
          onChange={(e) => {
            setNameHandler(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={student.email}
          onChange={(e) => {
            setEmailHandler(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Mobile
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="9898989898"
          value={student.mobile}
          onChange={(e) => {
            setMobileHandler(e);
          }}
        />
      </div>

      <button className="btn btn-primary">Save</button>
    </div>
  );
};
