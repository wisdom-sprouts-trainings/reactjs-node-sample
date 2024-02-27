import React, { useState } from "react";

export const InputContainer = ({ addStudentHandlerFunction }) => {
  const [student, setStudent] = useState({ name: "", email: "", mobile: 0 });

  function addNewStudentHandler() {
    //save the new data
    addStudentHandlerFunction(student);
    //clear the old data
    setStudent({ name: "", email: "", mobile: 0 });
  }

  function nameHandler(e) {
    setStudent((previousStudent) => {
      return { ...previousStudent, name: e.target.value };
    });
  }

  function setEmailHandler(e) {
    setStudent((previousState) => {
      return { ...previousState, email: e.target.value };
    });
  }

  function setMobileHandler(e) {
    setStudent((previousState) => {
      return { ...previousState, mobile: parseInt(e.target.value) };
    });
  }

  return (
    <div className="form-group">
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ravi Kant"
          value={student.name}
          onChange={(e) => nameHandler(e)}
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={student.email}
          onChange={(e) => setEmailHandler(e)}
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Mobile
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="987677887"
          value={student.mobile}
          onChange={(e) => setMobileHandler(e)}
        />
      </div>
      <button className="btn btn-primary" onClick={addNewStudentHandler}>
        Save
      </button>
    </div>
  );
};
