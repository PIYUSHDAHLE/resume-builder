import { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';

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

  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6 justify-center items-start">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <ResumeForm formData={formData} setFormData={setFormData} />
      </div>
      <ResumePreview formData={formData} template={selectedTemplate} />
    </div>
  );
}

export default App;
