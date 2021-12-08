import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditStudent = ({updateStudent}) => {

    const location = useLocation();
    console.log(location)

    const navigate = useNavigate();
    console.log(navigate)

    const [student, setStudent] = useState(location.state.student);

    function changeVals(e){
        console.log(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h4>Add Student Page</h4>
            <div>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" onChange={changeVals} value={student.name} placeholder="Student Name" />
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="number" name="age" onChange={changeVals} value={student.age}  placeholder="Student Age" />
                </div>
                <div className="field">
                    <label>City</label>
                    <input type="text" name="city" onChange={changeVals} value={student.city}  placeholder="Student City" />
                </div>
                <button style={{marginTop: '15px'}} onClick={()=>{
                    updateStudent(student, location.state.index);
                    // Redirect to Listing page Page
                    navigate('/')
                }} className="add-button">Save Student</button>
            </div>
        </div>
    );
};

export default EditStudent;