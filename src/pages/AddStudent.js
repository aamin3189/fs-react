import React,{useState} from 'react';

const AddStudent = ({onSave}) => {

    const [student, setStudent] = useState({
        name: '', age: 0, city: ''
    });

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
                    onSave(student);
                    // Redirect to Listing page Page
                }} className="add-button">Save Student</button>
            </div>
        </div>
    );
};

export default AddStudent;