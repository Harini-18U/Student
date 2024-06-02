import axios from 'axios';

const baseApiUrl = 'https://664af9c2a300e8795d43ae2e.mockapi.io';

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${baseApiUrl}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw new Error('Failed to fetch students');
  }
};

export const fetchStudent = async (id) => {
  try {
    const response = await axios.get(`${baseApiUrl}/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student:', error);
    throw new Error('Failed to fetch student');
  }
};

export const addStudent = async (student) => {
  try {
    console.log('Adding student:', student);
    const response = await axios.post(`${baseApiUrl}/students`, student, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw new Error('Failed to add student');
  }
};

export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${baseApiUrl}/students/${id}`, student, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw new Error('Failed to update student');
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${baseApiUrl}/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw new Error('Failed to delete student');
  }
};