import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStudent, updateStudent } from '../api/studentApi';

const EditStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [languages, setLanguages] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadStudent = async () => {
      try {
        const student = await fetchStudent(id);
        setName(student.name);
        setGender(student.gender);
        setDob(student.dob);
        setAddress(student.address);
        setLanguages(student.languages.join(','));
      } catch (error) {
        console.error('Error loading student:', error);
      }
    };
    loadStudent();
  }, [id]);

  const handleSubmit = async () => {
    try {
      await updateStudent(id, { name, gender, dob, address, languages: languages.split(',') });
      navigate('/studentList');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        placeholder="Languages (comma separated)"
      />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default EditStudent;