import { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';
import { generatePDF } from './utils/generatePDF';

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
      {/* Left Column: Form + Template Selector */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <ResumeForm formData={formData} setFormData={setFormData} />
      </div>

      {/* Right Column: Resume Preview */}
      <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
        <ResumePreview formData={formData} template={selectedTemplate} />

        <button
          onClick={() => generatePDF()}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
