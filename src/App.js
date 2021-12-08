import {useState} from 'react';
import Header from './components/header/Header';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import _ from 'underscore';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';


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

  const navigate = useNavigate();

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
