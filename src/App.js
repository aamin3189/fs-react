import {useState} from 'react';
import Header from './components/header/Header';
import './App.css';
import Info from './components/info/Info';
import { Routes, Route, Link } from "react-router-dom";

import _ from 'underscore';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';

const studentsMock = [
  {
    name: 'Waseem',
    age: 20,
    city: 'Hojai'
  },
  {
    name: 'Pankaj',
    age: 25,
    city: 'Dibrugarh'
  },
  {
    name: 'Deepak',
    age: 25,
    city: 'Guwahati'
  }
]

function App() {

  const [students, setStudents] = useState(studentsMock);


  function deleteStudent(retunedIndex){
    let newStd = _.clone(students);
    newStd.splice(retunedIndex, 1);
    setStudents(newStd);
  }

  function saveStudent(newStudent){
    console.log(newStudent)
    // Add this to the state
  }

  return (
    // JSX - JavaScript XML
    <div class="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<StudentList deleteStudent={(index)=>deleteStudent(index)} students={students} />} />
        <Route path="/add-student" element={<AddStudent onSave={saveStudent} />} />
      </Routes>

    </div>
  );
}

export default App;
