import { useState } from 'react';
import AIHelper from './AIHelper';

export default function ResumeForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const addField = (section, template) => {
    setFormData({ ...formData, [section]: [...formData[section], template] });
  };

  const removeField = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData({ ...formData, [section]: updated });
  };

  return (
    <div className="space-y-6 w-full max-w-xl p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold">Personal Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={formData.summary}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <AIHelper section="summary" formData={formData} setFormData={setFormData} />

      {/* Education */}
      <div>
        <h2 className="text-lg font-semibold mt-4">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="space-y-2 border p-2 rounded mb-2">
            <input
              type="text"
              placeholder="School/College"
              value={edu.school}
              onChange={(e) => handleArrayChange('education', index, 'school', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={() => removeField('education', index)} className="text-red-500 text-sm">Remove</button>
          </div>
        ))}
        <button onClick={() => addField('education', { school: '', degree: '', year: '' })} className="text-blue-600 text-sm">+ Add Education</button>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-semibold mt-4">Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index} className="space-y-2 border p-2 rounded mb-2">
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleArrayChange('experience', index, 'role', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleArrayChange('experience', index, 'duration', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={() => removeField('experience', index)} className="text-red-500 text-sm">Remove</button>
          </div>
        ))}
        <button onClick={() => addField('experience', { company: '', role: '', duration: '', description: '' })} className="text-blue-600 text-sm">+ Add Experience</button>
        <AIHelper section="experience" formData={formData} setFormData={setFormData} />
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold mt-4">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2 items-center mb-2">
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => {
                const updated = [...formData.skills];
                updated[index] = e.target.value;
                setFormData({ ...formData, skills: updated });
              }}
              className="w-full p-2 border rounded"
            />
            <button onClick={() => removeField('skills', index)} className="text-red-500 text-sm">X</button>
          </div>
        ))}
        <button onClick={() => addField('skills', '')} className="text-blue-600 text-sm">+ Add Skill</button>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-lg font-semibold mt-4">Projects</h2>
        {formData.projects.map((proj, index) => (
          <div key={index} className="space-y-2 border p-2 rounded mb-2">
            <input
              type="text"
              placeholder="Project Title"
              value={proj.title}
              onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={() => removeField('projects', index)} className="text-red-500 text-sm">Remove</button>
          </div>
        ))}
        <button onClick={() => addField('projects', { title: '', description: '' })} className="text-blue-600 text-sm">+ Add Project</button>
        <AIHelper section="projects" formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}
