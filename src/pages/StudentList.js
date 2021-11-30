import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../components/info/Info';

const StudentList = ({ students, deleteStudent }) => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Student List</h3>
                <Link to="/add-student">
                    <button className="add-button">Add Student</button>
                </Link>
            </div>
            <div className="contents">

                {
                    students.map((std, index) => (
                        <Info
                            data={std}
                            deleteStd={deleteStudent}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default StudentList;