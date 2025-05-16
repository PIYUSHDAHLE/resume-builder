// src/App.jsx
import { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  summary: '',
  education: [],
  experience: [],
  skills: [],
  projects: [],
});


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6 justify-center items-start">
      <ResumeForm formData={formData} setFormData={setFormData} />
      <ResumePreview formData={formData} />
    </div>
  );
}

export default App;
