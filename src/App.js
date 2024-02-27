import logo from './logo.svg';
import './App.css';
import { ListContainer } from './ListContainer';
import { useState, useEffect } from 'react';
import { InputContainer } from './InputContainer';

function App() {

  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    try {
      const response = await fetch("http://localhost:3011/api/student", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const studentResponse = await response.json();

      console.log(studentResponse);

      setStudents(studentResponse);
    } catch (error) {
      console.log(error);
    }
  }

  async function addStudent(student) {
    try {
      const response = await fetch("http://localhost:3011/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student)
      });

      const studentResponse = await response.json();

      fetchStudents();
      

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);


  return (
    <div className="App w-50 mx-auto">
      <InputContainer addStudentHandler={addStudent}/>
      <ListContainer students = {students}/>
    </div>
  );
}

export default App;
