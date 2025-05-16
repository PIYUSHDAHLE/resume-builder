export default function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  const templates = ['modern', 'minimalist', 'classic'];

  return (
    <div className="p-4 bg-white rounded shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-2">Select Resume Template</h2>
      <div className="flex gap-4">
        {templates.map((template) => (
          <button
            key={template}
            className={`px-4 py-2 border rounded ${
              selectedTemplate === template
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
            onClick={() => setSelectedTemplate(template)}
          >
            {template.charAt(0).toUpperCase() + template.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
