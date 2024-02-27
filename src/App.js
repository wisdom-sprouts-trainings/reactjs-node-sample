import logo from "./logo.svg";
import "./App.css";
import { ListContainer } from "./components/ListContainer";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    const response = await fetch("http://localhost:3011/api/student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const studentResponse = await response.json();

    console.log(studentResponse);

    setStudents(studentResponse);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="App w-50 mx-auto mt-5">
      <ListContainer students={students}/>
    </div>
  );
}

export default App;
