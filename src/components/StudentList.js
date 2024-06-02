import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../api/studentApi';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error loading students:', error);
      }
    };
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      try {
        await deleteStudent(id);
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>
      {students && students.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Languages</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.dob}</td>
                <td>{student.address}</td>
                <td>{student.languages.join(', ')}</td>
                <td>
                  <button 
                    className="btn btn-primary btn-sm me-2" 
                    onClick={() => navigate(`/editStudent/${student.id}`)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found</p>
      )}
      <button 
        className="btn btn-success mt-3" 
        onClick={() => navigate('/registerStudent')}
      >
        Register Student
      </button>
    </div>
  );
};

export default StudentList;