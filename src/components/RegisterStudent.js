import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../api/studentApi';

const RegisterStudent = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [languages, setLanguages] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await addStudent({ name, gender, dob, address, languages: languages.split(',') });
      navigate('/studentList');
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
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
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default RegisterStudent;