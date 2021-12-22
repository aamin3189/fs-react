import {useState, useEffect} from 'react';
import Header from './components/header/Header';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import _ from 'underscore';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Axios from 'axios';

const studentsMock = []

function App() {

  const [students, setStudents] = useState(studentsMock);


  useEffect(()=>{
    // execute 
    // Whenever this component is mounted
    getStudents();
  },[]);



  async function getStudents(){
    const stds = await Axios.get('http://localhost:3000/students');
    setStudents(stds.data);
  }


  function deleteStudent(e,retunedIndex){
    let newStd = _.clone(students);
    newStd.splice(retunedIndex, 1);
    setStudents(newStd);
  }

  function saveStudent(newStudent){
    let newStd = _.clone(students);
    newStd.push(newStudent);
    setStudents(newStd);
  }

  function updateStudent(student, index){
    let newStds = _.clone(students);
    newStds[index] = student;
    setStudents(newStds);
  }

  return (
    // JSX - JavaScript XML
    <div class="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<StudentList deleteStudent={(index)=>deleteStudent(index)} students={students} />} />
        <Route path="/add-student" element={<AddStudent onSave={saveStudent} />} />
        <Route path="/edit-student" element={<EditStudent updateStudent={updateStudent} />} />
      </Routes>

    </div>
  );
}

export default App;
