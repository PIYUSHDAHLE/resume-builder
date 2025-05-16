export default function ResumePreview({ formData }) {
  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-2xl space-y-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{formData.name || "Your Name"}</h1>
        <p>{formData.email || "Email Address"}</p>
        <p>{formData.phone || "Phone Number"}</p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-xl font-semibold border-b mb-2">Professional Summary</h2>
        <p className="text-gray-700">{formData.summary || "Write your summary here..."}</p>
      </div>

      {/* Education */}
      {formData.education.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{edu.school}</p>
              <p>{edu.degree} - {edu.year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{exp.company}</p>
              <p>{exp.role} | {exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {formData.skills.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded text-sm">{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
          {formData.projects.map((proj, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
