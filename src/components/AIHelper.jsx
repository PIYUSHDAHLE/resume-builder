export default function AIHelper({ section, setFormData, formData }) {
  const handleAISuggestion = () => {
    const mockSuggestions = {
      summary: `Frontend Developer with a strong background in React.js, UI/UX, and modern JavaScript frameworks. Passionate about building responsive, scalable, and accessible web applications.`,
      experience: {
        company: "Tech Solutions Inc.",
        role: "React Developer",
        duration: "Jan 2023 - Present",
        description:
          "Developed and maintained scalable web applications using React, optimized performance, and collaborated with designers to ensure responsive design.",
      },
      projects: {
        title: "AI Resume Builder",
        description:
          "Built a resume builder using React.js and Tailwind CSS with AI suggestions, multiple templates, live preview, and PDF export.",
      },
    };

    if (section === 'summary') {
      setFormData({ ...formData, summary: mockSuggestions.summary });
    }

    if (section === 'experience') {
      setFormData({
        ...formData,
        experience: [...formData.experience, mockSuggestions.experience],
      });
    }

    if (section === 'projects') {
      setFormData({
        ...formData,
        projects: [...formData.projects, mockSuggestions.projects],
      });
    }
  };

  return (
    <button
      className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
      onClick={handleAISuggestion}
    >
      Suggest {section === 'summary' ? 'Summary' : section}
    </button>
  );
}
